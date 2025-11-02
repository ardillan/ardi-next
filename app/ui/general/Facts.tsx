"use client";

import Link from "next/link";
import React from "react";

import { RANDOMFACTS } from "@/lib/constants";
import { getRandomFacts } from "@/lib/getRandomFacts";
import { theme } from "@/styles/common/theme.css";

export const Facts = ({ count = 2 }: { count?: number }) => {
  const facts = getRandomFacts(RANDOMFACTS, count);

  return (
    <>
      {facts.map((item) => {
        const match = item.fact.match(/^(.*){{(.*)}}(.*)$/);
        if (!match) return item.fact + ", ";

        const [before, inside, after] = match;
        return (
          <React.Fragment key={item.fact}>
            {before}
            <Link
              href={item.link}
              target="_blank"
              style={{ color: theme.color.primary }}
            >
              {inside}
            </Link>
            {after}
            {", "}
          </React.Fragment>
        );
      })}
    </>
  );
};
