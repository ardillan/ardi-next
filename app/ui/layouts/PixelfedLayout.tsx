import React from "react";
import { parseStringPromise } from "xml2js";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { PixelfedEntry } from "@/interfaces/IPixelfed";

import SuperMarkdown from "../general/SuperMarkdown";
import styles from "./PixelfedLayout.module.css";

export default async function PixelfedLayout({
  pageContent,
}: {
  pageContent: Promise<IMarkDownData>;
}) {
  const feedUrl = "https://pixelfed.social/users/ardi.atom ";
  const res = await fetch(feedUrl);
  const xml = await res.text();
  const feed = await parseStringPromise(xml);

  const pixelfed = feed.feed.entry || [];

  const { title, description, contentHtml } = await pageContent;

  const removeHastags = (text: string) => {
    return text
      .replace(/#[\p{L}\p{M}\p{N}_]+/gu, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <section>
        {contentHtml ? <SuperMarkdown markdownContent={contentHtml} /> : null}
      </section>
      <div className={styles.pixelfed}>
        {pixelfed.map((photo: PixelfedEntry) => {
          if (!photo.id) return;
          return (
            <a
              key={photo.id[0]}
              href={photo.link[0].$.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={photo["media:content"][0].$.url}
                  alt={photo.title[0]}
                />
                <figcaption>{removeHastags(photo.title[0])}</figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </div>
  );
}
