#!/usr/bin/env python3
"""Render the source-controlled share image. Output stays outside the web project."""
import argparse
import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser()
parser.add_argument('--font', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
args = parser.parse_args()
html = Path(__file__).with_name('social-image.html').read_text()
font = 'data:font/ttf;base64,' + base64.b64encode(args.font.read_bytes()).decode()
html = html.replace('__FONT_DATA_URI__', font)
args.output.parent.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
    page = browser.new_page(viewport={'width': 1200, 'height': 1200}, device_scale_factor=1)
    page.set_content(html)
    page.evaluate('document.fonts.ready')
    page.locator('main').screenshot(path=str(args.output))
    print('Image:', args.output)
    print('Content:', page.locator('.content').bounding_box())
    browser.close()
