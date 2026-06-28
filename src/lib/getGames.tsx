import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import type { IGame } from "@/interfaces/IGame";

const mapNotionPageToGame = (page: PageObjectResponse): IGame => ({
  id: page.id,
  finished_on:
    page.properties["Terminado el"]?.type === "date"
      ? (page.properties["Terminado el"].date?.start ?? null)
      : null,
  format:
    page.properties["Formato"]?.type === "multi_select"
      ? page.properties["Formato"].multi_select.map((format) => format.name)
      : null,
  title:
    page.properties["Nombre"]?.type === "title"
      ? page.properties["Nombre"].title[0]?.plain_text
      : null,
  played:
    page.properties["Jugado"]?.type === "checkbox"
      ? page.properties["Jugado"].checkbox
      : false,
  purchased:
    page.properties["Comprado"]?.type === "checkbox"
      ? page.properties["Comprado"].checkbox
      : null,
  purchase_date:
    page.properties["Fecha compra"]?.type === "date"
      ? (page.properties["Fecha compra"].date?.start ?? null)
      : null,
  platform:
    page.properties["Plataforma"]?.type === "multi_select"
      ? page.properties["Plataforma"].multi_select.map(
          (platform) => platform.name,
        )
      : null,
  dlcs: [],
});

const getNotionGames = async (): Promise<IGame[] | null> => {
  try {
    const notionToken = process.env.NOTION_TOKEN;
    const gamesDataSourceId = process.env.NOTION_GAMES;

    if (!notionToken || !gamesDataSourceId) {
      console.warn("Notion env vars are not configured");
      return [];
    }

    const notionClient = new Client({ auth: notionToken });
    const gamesDatabase: PageObjectResponse[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const gamesDatabaseQuery = await notionClient.dataSources.query({
        data_source_id: gamesDataSourceId,
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

    const gamesMapper = await Promise.all(
      gamesDatabase.map(async (game): Promise<IGame> => {
        const subItemProperty = game.properties["Sub-item"];
        const relationIds =
          subItemProperty?.type === "relation"
            ? subItemProperty.relation.map((relation) => relation.id)
            : [];

        const dlcs = relationIds.length
          ? (
              await Promise.all(
                relationIds.map(async (relationId) => {
                  try {
                    const relatedPage = (await notionClient.pages.retrieve({
                      page_id: relationId,
                    })) as PageObjectResponse;

                    return relatedPage
                      ? mapNotionPageToGame(relatedPage)
                      : null;
                  } catch (error) {
                    console.warn(
                      `Failed to retrieve DLC page ${relationId}`,
                      error,
                    );
                    return null;
                  }
                }),
              )
            ).filter((dlc): dlc is IGame => dlc !== null)
          : [];

        return {
          ...mapNotionPageToGame(game),
          dlcs,
        };
      }),
    );

    return gamesMapper;
  } catch (error) {
    console.error("❌ Error calling Github Data:", error);
    return null;
  }
};

export default getNotionGames;
