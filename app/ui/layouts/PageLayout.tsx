import React from "react";

import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

interface IPageLayout {
  pageContent: IMarkDownData;
  home?: boolean;
  className?: object;
}

const PageLayout = ({ pageContent }: IPageLayout) => (
  <div>
    <header>
      <h1>{pageContent.title}</h1>
      <h3>{pageContent.description}</h3>
    </header>
    <section>
      {pageContent.contentHtml && (
        <SuperMarkdown markdownContent={pageContent.contentHtml} />
      )}
    </section>
  </div>
);

export default PageLayout;
