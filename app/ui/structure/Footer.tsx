import Link from "next/link";
import React from "react";

import Mastodon from "@/icons/mastodon";
import Torlavega from "@/icons/torlavega";
import { INavigationLink } from "@/interfaces/INavigationLink";
import { NAVIGATION } from "@/lib/constants";
import getGitHub from "@/lib/getGithub";
import { formatDate } from "@/lib/helpers";

import styles from "./Footer.module.css";

const Footer = async () => {
  const githubData = await getGitHub();
  const getYear = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          <Torlavega />
        </p>
        <div>
          <p>Creado desde la verde y gris Torrelavega</p>
          {githubData != null ? (
            <small>
              Última actualización el {formatDate(githubData.pushed_at)}
            </small>
          ) : null}
          <small>
            <a
              target="_blank"
              href="https://ardi.goatcounter.com"
              rel="noreferrer"
            >
              Estadísticas del sitio{" "}
            </a>
          </small>
        </div>
        <ul>
          {NAVIGATION.filter((link: INavigationLink) =>
            link.position.includes("Footer"),
          ).map((link: INavigationLink) => (
            <li key={link.path}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
          <li>
            <a
              href="https://mastodon.social/@ardillan"
              rel="me noreferrer"
              target="_blank"
            >
              <Mastodon />
            </a>
          </li>
        </ul>
      </div>
      <small>{`Ardi Monster ${getYear.getFullYear()}`}</small>
    </footer>
  );
};

export default Footer;
