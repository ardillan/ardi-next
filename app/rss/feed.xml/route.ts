import { getPostData, getSortedPostsData } from "@/lib/getPostData";
import { sanitizeString } from "@/lib/helpers";

export async function GET() {
  const items = await getItems();

  const xml = `<?xml version="1.0" encoding="utf-8"?>
                <feed xmlns="http://www.w3.org/2005/Atom">
                  <title>RSS de Adrián Alcorta Puente (Ardi)</title>
                  <subtitle>Un compendio de artículos, reflexiones y notas sobre videojuegos</subtitle>
                  <link href="https://ardi.monster/" />
                  <link rel="self" href="https://ardi.monster/rss/feed.xml" />
                  <id>https://ardi.monster/</id>
                  <author>
                    <name>Ardi</name>
                  </author>
                  ${items}
                </feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

const getItems = async (): Promise<string> => {
  const allPostsData = await getSortedPostsData();

  const items = await Promise.all(
    allPostsData.map(async (post) => {
      if (post.id && post.title && post.date) {
        const postData = await getPostData(post.id);
        if (!postData) return null;

        return `<entry>
                  <title>${sanitizeString(postData.title)}</title>
                  <link href="https://ardi.monster/blog/${postData.id}" />
                  <id>https://ardi.monster/blog/${postData.id}</id>
                  <updated>${post.date}</updated>
                  <summary>${sanitizeString(postData.description)}</summary>
                  <category>${postData.category?.join(", ")}</category>
                  <content xml:lang="es" type="html"><![CDATA[${
                    postData.contentHtml
                  }]]></content>
                </entry>`;
      }
      return null;
    })
  );

  return items.filter(Boolean).join("");
};
