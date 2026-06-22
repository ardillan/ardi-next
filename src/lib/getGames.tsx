import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import type { IGame } from "@/interfaces/IGame";

const getNotionGames = async (): Promise<IGame[] | null> => {
  try {
    const notionClient = new Client({ auth: process.env.NOTION_TOKEN });
    const gamesDatabase: PageObjectResponse[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const gamesDatabaseQuery = await notionClient.dataSources.query({
        data_source_id: process.env.NOTION_GAMES ?? "",
        page_size: 100,
        start_cursor: startCursor,
        sorts: [
          {
            property: "Nombre",
            direction: "ascending",
          },
        ],
      });

      hasMore = gamesDatabaseQuery.has_more;

      startCursor = gamesDatabaseQuery.next_cursor
        ? gamesDatabaseQuery.next_cursor
        : undefined;

      const filteredResults = gamesDatabaseQuery.results.filter(
        (page): page is PageObjectResponse => "properties" in page,
      );

      gamesDatabase.push(...filteredResults);
    }

    const gamesMapper = gamesDatabase.map((game): IGame => {
      return {
        id: game.id,
        finished_on:
          game.properties["Terminado el"]?.type === "date"
            ? (game.properties["Terminado el"].date?.start ?? null)
            : null,
        format:
          game.properties["Formato"]?.type === "multi_select"
            ? game.properties["Formato"].multi_select.map(
                (format) => format.name,
              )
            : null,
        title:
          game.properties["Nombre"]?.type === "title"
            ? game.properties["Nombre"].title[0]?.plain_text
            : null,
        played:
          game.properties["Jugado"]?.type === "checkbox"
            ? game.properties["Jugado"].checkbox
            : false,
        purchased:
          game.properties["Comprado"]?.type === "checkbox"
            ? game.properties["Comprado"].checkbox
            : null,
        purchase_date:
          game.properties["Fecha compra"]?.type === "date"
            ? (game.properties["Fecha compra"].date?.start ?? null)
            : null,
        platform:
          game.properties["Plataforma"]?.type === "multi_select"
            ? game.properties["Plataforma"].multi_select.map(
                (platform) => platform.name,
              )
            : null,
      };
    });

    return gamesMapper;
  } catch (error) {
    console.error("❌ Error calling Github Data:", error);
    return null;
  }
};

export default getNotionGames;
