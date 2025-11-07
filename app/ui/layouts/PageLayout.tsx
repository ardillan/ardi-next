import React from "react";

import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import styles from "./PageLayout.module.css";

const PageLayout = ({ pageContent }: { pageContent: IMarkDownData }) => (
  <div>
    <header className={styles.header}>
      <h1>{pageContent.title}</h1>
      <h3>{pageContent.description}</h3>
    </header>
    <section>
      <div className={styles.content}>
        {pageContent.contentHtml && (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        )}
      </div>
    </section>
  </div>
);

export default PageLayout;
