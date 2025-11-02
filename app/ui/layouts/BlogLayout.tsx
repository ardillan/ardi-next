import React from "react";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { getSortedPostsData } from "@/lib/getPostData";

import Posts from "../general/Posts";
import SuperMarkdown from "../general/SuperMarkdown";
import { header, headerSubtitle, headerTitle } from "./BlogLayout.css";

export default async function BlogLayout({
  pageContent,
}: {
  pageContent: Promise<IMarkDownData>;
}) {
  const { title, description, contentHtml } = await pageContent;
  const allPostsData = getSortedPostsData();
  return (
    <div>
      <header className={header}>
        <h1 className={headerTitle}>{title}</h1>
        <h3 className={headerSubtitle}>{description}</h3>
      </header>
      <section>
        {contentHtml ? <SuperMarkdown markdownContent={contentHtml} /> : null}
      </section>
      <Posts layout="images" allPostsData={allPostsData} />
    </div>
  );
}
