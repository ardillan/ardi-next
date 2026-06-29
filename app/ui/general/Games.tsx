import React from "react";

import getNotionGames from "@/lib/getGames";
import { formatDate } from "@/lib/helpers";

import styles from "./Games.module.css";
import CustomTooltip from "./Tooltip";

const Games = async () => {
  const notionGames = await getNotionGames();

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
          ? notionGames
              .filter((game) => game.type !== "DLC")
              .map((game) => {
                return (
                  <li key={game.id}>
                    <p>{game.title}</p>
                    {game.dlcs?.length ? (
                      <small className={styles.dlc}>
                        {game.dlcs?.map((dlc) => (
                          <span
                            key={dlc.id}
                            className={
                              dlc.played
                                ? styles.dlcComplete
                                : styles.dlcUncomplete
                            }
                          >
                            <CustomTooltip
                              id={dlc.id}
                              type="plain"
                              content={
                                dlc.played
                                  ? `DLC Completado ${
                                      dlc.finished_on
                                        ? `el ${formatDate(dlc.finished_on)}`
                                        : ""
                                    }`
                                  : "DLC sin completar"
                              }
                            >
                              {dlc.title}
                            </CustomTooltip>
                          </span>
                        ))}
                      </small>
                    ) : null}
                    <small>{game.platform?.map((platform) => platform)}</small>
                    <CustomTooltip
                      id={game.id}
                      played={game.played}
                      type="bubble"
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
