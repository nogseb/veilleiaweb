#!/usr/bin/env python3
"""Check non-JS link previews against a running development or production server."""
import argparse
from html.parser import HTMLParser
from io import BytesIO
from urllib.request import Request, urlopen
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('--base', default='http://127.0.0.1:3000')
args = parser.parse_args()

class Head(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
    def handle_starttag(self, tag, attrs):
        if tag in ('meta', 'link'):
            self.tags.append((tag, dict(attrs)))
    def value(self, key):
        values = [d['content'] for _, d in self.tags if d.get('property', d.get('name')) == key]
        assert len(values) == 1, (key, values)
        return values[0]

image_url = None
for path in ['/?partage=2026-W44', '/semaine/44', '/semaine/43', '/archives', '/timeline', '/about', '/stats']:
    request = Request(args.base.rstrip('/') + path, headers={'User-Agent': 'Microsoft Office/16.0 (Microsoft Teams)'})
    with urlopen(request, timeout=25) as response:
        assert response.status == 200
        text = response.read().decode()
        head_html = text[:text.lower().index('</head>')]
        parser = Head()
        parser.feed(head_html)
        title = parser.value('og:title')
        description = parser.value('og:description')
        assert parser.value('description') == description
        assert parser.value('twitter:description') == description
        assert parser.value('og:image:width') == '1200'
        assert parser.value('og:image:height') == '1200'
        assert parser.value('og:image:type') == 'image/png'
        assert parser.value('og:image:alt')
        assert 'checkpoint-screenshot' not in head_html
        assert head_html.lower().count('<title>') == 1
        assert sum(1 for t, d in parser.tags if t == 'link' and d.get('rel') == 'canonical') == 1
        image_url = parser.value('og:image')
        assert image_url.startswith('https://files.manuscdn.com/')
        if path.startswith('/semaine/'):
            assert 'S' + path.rsplit('/', 1)[1] in title
        print(path, title, '|', description)

with urlopen(Request(image_url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=25) as response:
    assert response.status == 200
    assert response.headers['Content-Type'].split(';')[0] == 'image/png'
    image = Image.open(BytesIO(response.read()))
    assert image.size == (1200, 1200)
    print('Public image:', response.status, image.format, image.size)
print('PASS: share metadata available without JS, unique tags, public image without login.')
