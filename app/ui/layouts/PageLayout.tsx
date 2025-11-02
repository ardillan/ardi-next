import React from "react";

import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import { header, headerSubtitle, headerTitle } from "./BlogLayout.css";

interface IPageLayout {
  pageContent: IMarkDownData;
  home?: boolean;
  className?: object;
}

const PageLayout = ({ pageContent }: IPageLayout) => (
  <div>
    <header className={header}>
      <h1 className={headerTitle}>{pageContent.title}</h1>
      <h3 className={headerSubtitle}>{pageContent.description}</h3>
    </header>
    <section>
      {pageContent.contentHtml && (
        <SuperMarkdown markdownContent={pageContent.contentHtml} />
      )}
    </section>
  </div>
);

export default PageLayout;
