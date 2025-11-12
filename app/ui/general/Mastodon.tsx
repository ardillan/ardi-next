"use client";

import React, { useEffect } from "react";

type MastodonEmbedProps = {
  src: string;
};

const Mastodon: React.FC<MastodonEmbedProps> = ({ src }) => {
  useEffect(() => {
    if (!document.querySelector("script[src*='mastodon.social/embed.js']")) {
      const script = document.createElement("script");
      script.src = "https://mastodon.social/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src={src}
      className="mastodon-embed"
      style={{ maxWidth: "100%", border: "none" }}
      loading="lazy"
    />
  );
};

export default Mastodon;
