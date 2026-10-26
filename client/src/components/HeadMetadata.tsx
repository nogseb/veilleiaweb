import { useEffect } from "react";
import { useLocation } from "wouter";
import { renderSocialHead, socialMetadataForPath } from "../../../shared/socialMetadata";

/** Browser navigation stays consistent with the metadata already sent by the server. */
export default function HeadMetadata() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = socialMetadataForPath(location);
    document.head.querySelectorAll('title, link[rel="canonical"], meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"]').forEach((node) => node.remove());
    const fragment = document.createElement("template");
    fragment.innerHTML = renderSocialHead(meta);
    document.head.appendChild(fragment.content);
  }, [location]);
  return null;
}
