"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

import styles from "./CustomImage.module.css";
const CustomImage = ({
  src,
  alt,
  width,
  height,
  className,
  showCaption = true,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  showCaption?: boolean;
}) => {
  return (
    <figure className={styles.custom}>
      <CldImage
        src={`ardi-monster${src}`}
        alt={alt}
        title={alt}
        width={width ?? 900}
        height={height ?? 900}
        sizes="(max-width: 768px) 100vw"
        className={className}
      />
      {alt !== null && showCaption ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
};

export default CustomImage;
