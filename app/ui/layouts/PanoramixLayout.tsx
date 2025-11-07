import React from "react";

import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import styles from "./PanoramixLayout.module.css";
interface IPanoramixLayout {
  pageContent: IMarkDownData;
  className?: object;
}

const PanoramixLayout = ({ pageContent }: IPanoramixLayout) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        {pageContent.contentHtml && (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        )}
      </section>
    </>
  );
};

export default PanoramixLayout;
