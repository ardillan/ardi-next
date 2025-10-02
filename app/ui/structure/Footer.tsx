import Link from "next/link";
import React from "react";

import Mastodon from "@/icons/mastodon";
import { INavigationLink } from "@/interfaces/INavigationLink";
import { NAVIGATION } from "@/lib/constants";
import getGitHub from "@/lib/getGithub";
import { formatDate } from "@/lib/helpers";
import { mainContainer } from "@/styles/common/grid.css";

import {
  copyright,
  factory,
  footerContainer,
  footerData,
  footerLink,
  footerLinks,
} from "./Footer.css";

const Footer = async () => {
  const githubData = await getGitHub();
  const getYear = new Date();
  return (
    <footer className={mainContainer}>
      <div className={footerContainer}>
        <div className={footerData}>
          <p className={factory}>🏭</p>
          <div>
            <p>Creado desde la verde y gris Torrelavega</p>
            {githubData != null ? (
              <small>
                Última actualización el {formatDate(githubData.pushed_at)}
              </small>
            ) : null}
          </div>
          <ul className={footerLinks}>
            {NAVIGATION.filter((link: INavigationLink) =>
              link.position.includes("Footer")
            ).map((link: INavigationLink) => (
              <Link key={link.path} className={footerLink} href={link.path}>
                <li>{link.title}</li>
              </Link>
            ))}
            <a
              href="https://mastodon.social/@ardillan"
              className={footerLink}
              rel="me noreferrer"
              target="_blank"
            >
              <Mastodon />
            </a>
          </ul>
        </div>
      </div>
      <small
        className={copyright}
      >{`Ardi Monster ${getYear.getFullYear()}`}</small>
    </footer>
  );
};

export default Footer;
