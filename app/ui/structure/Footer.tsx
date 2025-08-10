import Link from "next/link";
import React from "react";

import { INavigationLink } from "@/interfaces/INavigationLink";
import { NAVIGATION } from "@/lib/constants";
import getGitHub from "@/lib/getGithub";
import { formatDate } from "@/lib/helpers";

const Footer = async () => {
  const githubData = await getGitHub();
  const getYear = new Date();
  return (
    <footer>
      <p>🏭</p>
      <div>
        <p>Creado desde la verde y gris Torrelavega</p>
      </div>
      {githubData != null ? (
        <small>
          Última actualización el {formatDate(githubData.pushed_at)}
        </small>
      ) : null}
      <ul>
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
      <small>{`Ardi Monster ${getYear.getFullYear()}`}</small>
    </footer>
  );
};

export default Footer;
