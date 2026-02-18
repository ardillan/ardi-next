import fs from "fs";
import path from "path";

import { getPostData, getSortedPostsData } from "@/lib/getPostData";
import { escapeHtml, markdownToHtml, sanitizeString } from "@/lib/helpers";

async function generateRss() {
  const items = await getItems(); // tu misma función
  const xml = `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Feed de Ardi</title>
    <subtitle>Un compendio de artículos, reflexiones y notas.</subtitle>
    <link href="https://ardi.monster/" />
    <link rel="self" href="https://ardi.monster/rss/feed.xml" />
    <id>https://ardi.monster/</id>
    <author><name>Ardi</name></author>
    ${items}
  </feed>`;
  const filePath = path.join(process.cwd(), "public/rss/feed.xml");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, xml);
}

const getItems = async (): Promise<string> => {
  const allPostsData = getSortedPostsData("content/posts");

  const items = await Promise.all(
    allPostsData.map(async (post) => {
      if (post.id && post.title && post.date) {
        const [category, id] = post.id.includes("/")
          ? post.id.split("/")
          : [undefined, post.id];

        const postData = await getPostData(id, "content/posts/", category);
        if (!postData || !postData.contentHtml) return null;
        const markdownInHtml = await markdownToHtml(postData.contentHtml);
        const html = escapeHtml(markdownInHtml);
        return `<entry>
                  <title>${sanitizeString(postData.title)}</title>
                  <link href="https://ardi.monster/blog/${postData.id}" />
                  <id>https://ardi.monster/blog/${postData.id}</id>
                  <updated>${post.date}</updated>
                  <summary>${sanitizeString(postData.description)}</summary>
                  <category>${postData.category?.join(", ")}</category>
                  <content xml:lang="es" type="html">${html}</content>
                </entry>`;
      }
      return null;
    }),
  );

  return items.filter(Boolean).join("");
};

generateRss();
