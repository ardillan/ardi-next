import React from "react";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { getSortedPostsData } from "@/lib/getPostData";

import Memoirs from "../general/Memoirs";
import SuperMarkdown from "../general/SuperMarkdown";
import { header, headerSubtitle, headerTitle } from "./BlogLayout.css";

export default async function MemoirsLayout({
  pageContent,
}: {
  pageContent: Promise<IMarkDownData>;
}) {
  const { title, description, contentHtml } = await pageContent;
  const allPostsData = getSortedPostsData("content/memorias/");
  return (
    <div>
      <header className={header}>
        <h1 className={headerTitle}>{title}</h1>
        <h3 className={headerSubtitle}>{description}</h3>
      </header>
      <section>
        {contentHtml ? <SuperMarkdown markdownContent={contentHtml} /> : null}
      </section>
      <Memoirs allPostsData={allPostsData} />
    </div>
  );
}
