"use client";

import React, { JSX } from "react";
import { Tooltip } from "react-tooltip";

import styles from "./Tooltip.module.css";

const CustomTooltip = ({
  children,
  id,
  content,
  played,
}: {
  children?: JSX.Element;
  id: string;
  content: string;
  played?: boolean;
}) => {
  return (
    <>
      <a
        data-tooltip-id={id}
        data-tooltip-content={content}
        className={styles.tooltip}
      >
        <span data-played={played}>{children && children}</span>
      </a>
      <Tooltip
        id={id}
        opacity={1}
        style={{ zIndex: 20, background: "#ffc430", color: "black" }}
      />
    </>
  );
};

export default CustomTooltip;
