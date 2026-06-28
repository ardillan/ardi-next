"use client";

import React, { ReactNode } from "react";
import { Tooltip } from "react-tooltip";

import styles from "./Tooltip.module.css";

const CustomTooltip = ({
  children,
  id,
  content,
  played,
  type,
}: {
  children?: ReactNode;
  id: string;
  content: string;
  played?: boolean;
  type: "bubble" | "plain";
}) => {
  switch (type) {
    case "bubble":
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

    case "plain":
      return (
        <>
          <a
            data-tooltip-id={id}
            data-tooltip-content={content}
            className={styles.tooltipDLC}
          >
            {children}
          </a>
          <Tooltip
            id={id}
            opacity={1}
            style={{ zIndex: 20, background: "#ffc430", color: "black" }}
          />
        </>
      );
  }
};

export default CustomTooltip;
