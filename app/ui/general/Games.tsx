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
    <div className={styles.header}>
      <h1>Mis videojuegos</h1>
      <h3>
        Ahora mismo tengo alrededor de <strong>{notionGames.length}</strong>{" "}
        videojuegos.
      </h3>
      <ul className={styles.games}>
        {notionGames.length > 0
          ? notionGames.map((game) => {
              return (
                <li key={game.id}>
                  <p>{game.title}</p>
                  <small>{game.platform?.map((platform) => platform)}</small>
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
    </div>
  );
};

export default Games;
