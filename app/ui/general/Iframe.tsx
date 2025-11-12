"use client";

import dynamic from "next/dynamic";
import React from "react";

// TODO: Crear una entrada sobre importaciones dinámicas.
// Explicación: He hecho esta importación dinámica con GPT y no entiendo una mierda.
const MastodonEmbed = dynamic(
  () => import("@/appComponents/general/Mastodon").then((mod) => mod.default),
  {
    ssr: false,
  }
);

type IframeProps = {
  src: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  allow?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Iframe: React.FC<IframeProps> = ({
  src,
  title = "iframe content",
  width = "100%",
  height = "100%",
  allow = "",
  className,
  style,
}) => {
  if (!src) return null;

  if (src.includes("mastodon.social")) {
    return <MastodonEmbed src={src} />;
  }

  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      allow={allow}
      className={className}
      style={{ border: "none", ...style }}
      loading="lazy"
    />
  );
};

export default Iframe;
