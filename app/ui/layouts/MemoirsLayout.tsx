import React from "react";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { getSortedPostsData } from "@/lib/getPostData";

import Memoirs from "../general/Memoirs";
import SuperMarkdown from "../general/SuperMarkdown";
import styles from "./BlogLayout.module.css";

export default async function BlogLayout({
  pageContent,
}: {
  pageContent: Promise<IMarkDownData>;
}) {
  const { title, description, contentHtml } = await pageContent;
  const allPostsData = getSortedPostsData("content/memorias/");
  return (
    <div>
      <header className={styles.header}>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </header>
      <section>
        {contentHtml ? <SuperMarkdown markdownContent={contentHtml} /> : null}
      </section>
      <Memoirs allPostsData={allPostsData} />
    </div>
  );
}
