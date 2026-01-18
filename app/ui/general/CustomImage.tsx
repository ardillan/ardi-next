"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <figure>
      <CldImage
        src={`ardi-monster/${src}`}
        alt={alt}
        title={alt}
        width={900}
        height={900}
        sizes="(max-width: 768px) 100vw"
      />
      {alt !== null ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
};

export default CustomImage;
