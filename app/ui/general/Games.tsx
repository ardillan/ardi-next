import React from "react";

import { IGame } from "@/interfaces/IGame";
import getNotionGames from "@/lib/getGames";
import { formatDate } from "@/lib/helpers";

import styles from "./Games.module.css";
import CustomTooltip from "./Tooltip";

const Games = async () => {
  const notionGames: IGame[] = await getNotionGames();

  if (!notionGames) return;

  return (
    <>
      <p>
        Ahora mismo tengo alrededor de{" "}
        <strong style={{ color: "rgba(var(--color-honey-yellow))" }}>
          {notionGames.length}
        </strong>{" "}
        videojuegos.
      </p>
      <ul className={styles.games}>
        {notionGames.length > 0
          ? notionGames.map((game) => {
              return (
                <li key={game.id}>
                  <span>{game.title}</span>
                  <span>{game.platform?.map((platform) => platform)}</span>
                  <CustomTooltip
                    id={game.id}
                    played={game.played}
                    content={
                      game.played
                        ? `Completado ${
                            game.finished_on
                              ? `el ${formatDate(game.finished_on)}`
                              : ""
                          }`
                        : "Sin completar"
                    }
                  />
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default Games;
