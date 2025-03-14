import { getPostData, getSortedPostsData } from "@/lib/getPostData";
import { sanitizeString } from "@/lib/helpers";

export async function GET() {
  const channel =
    "<channel><title>Web de Adrián Alcorta Puente (Ardi)</title><link>https://ardi.monster</link><description>Listado de todas las entradas del blog de Ardi</description><language>es-ES</language><generator>Next.js 15</generator><docs>http://blogs.law.harvard.edu/tech/rss</docs><image><url>https://ardi.monster/sad-ardi.png</url><title>Un retrato de Ardi en pixelart</title><link>https://ardi.monster</link></image></channel>";

  const items = await getItems();

  const xml = `<?xml version="1.0" encoding="utf-8"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">${channel}${items}</rss>`;

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

        const formattedDate = new Date(post.date).toUTCString();
        return `<item>
                  <author>Ardi</author>
                  <title>${sanitizeString(postData.title)}</title>
                  <description>${sanitizeString(
                    postData.description
                  )}</description>
                  <link>https://ardi.monster/blog/${postData.id}</link>
                  <category>${postData.category?.join(", ")}</category>
                  <pubDate>${formattedDate}</pubDate>
                </item>`;
      }
      return null;
    })
  );

  return items.filter(Boolean).join("");
};
