import Link from "next/link";
import React from "react";

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
      <p className={styles.emoji}>🏭</p>
      <div className={styles.created}>
        <p>Creado desde la verde y gris Torrelavega</p>
      </div>
      {githubData != null ? (
        <small>
          Última actualización el {formatDate(githubData.pushed_at)}
        </small>
      ) : null}
      <ul className={styles.links}>
        {NAVIGATION.filter((link: INavigationLink) =>
          link.position.includes("Footer")
        ).map((link: INavigationLink) => (
          <Link key={link.path} href={link.path}>
            <li>{link.title}</li>
          </Link>
        ))}
        <a href="https://mastodon.social/@ardillan" rel="me">
          Mastodon
        </a>
      </ul>
      <small
        className={styles.year}
      >{`Ardi Monster ${getYear.getFullYear()}`}</small>
    </footer>
  );
};

export default Footer;
