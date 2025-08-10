"use client";

import React, { JSX } from "react";
import { Tooltip } from "react-tooltip";

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
        data-played={played}
        data-tooltip-content={content}
      >
        {children && children}
      </a>
      <Tooltip
        id={id}
        opacity={1}
        style={{
          backgroundColor: "rgba(var(--color-space-darker))",
          color: "rgba(var(--color-honey-yellow))",
          zIndex: 10,
          fontSize: "0.75rem",
        }}
      />
    </>
  );
};

export default CustomTooltip;
