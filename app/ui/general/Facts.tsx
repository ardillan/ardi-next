import Link from "next/link";
import React from "react";

import { RANDOMFACTS } from "@/lib/constants";
import { getRandomFacts } from "@/lib/getRandomFacts";

import styles from "./Facts.module.css";

export const Facts = ({ count = 2 }: { count?: number }) => {
  const facts = getRandomFacts(RANDOMFACTS, count);

  const renderFact = (fact: string, link?: string) => {
    const match = fact.match(/^(.*?){{(.*?)}}(.*?)$/);

    if (!match) return fact;

    const [, before, inside, after] = match;

    return (
      <>
        {before}
        <Link
          className={styles.facts}
          href={link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {inside}
        </Link>
        {after}
      </>
    );
  };

  return (
    <>
      {facts.map((item, index) => (
        <React.Fragment key={index}>
          {renderFact(item.fact, item.link)}
          {index < facts.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
    </>
  );
};
