import React from "react";

import Games from "@/appComponents/general/Games";
import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

export default function GamesLayout({ ...pageContent }: IMarkDownData) {
  return (
    <div>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        {pageContent.contentHtml ? (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        ) : null}
      </section>

      <Games />
    </div>
  );
}
