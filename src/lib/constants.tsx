import { INavigationLink } from "@/interfaces/INavigationLink";
export const NAVIGATION: Array<INavigationLink> = [
  {
    title: "Blog",
    path: "/blog",
    layout: "blog",
    position: ["MainNavigation"],
  },

  {
    title: "Fotos",
    path: "/fotos",
    layout: "page",
    position: ["MainNavigation"],
  },
  {
    title: "Cómo trabajo",
    path: "/como-trabajo",
    layout: "page",
    position: ["Footer"],
  },
  {
    title: "Espacios",
    path: "/espacios",
    layout: "panoramix",
    position: ["Footer"],
  },
  {
    title: "Videojuegos",
    path: "/videojuegos",
    layout: "games",
    position: ["MainNavigation", "Footer"],
  },
];

export const ARDI = {
  web: {
    title: "Ardi.Monster",
    description: "Página personal de Ardi",
    url: "https://www.ardi.monster",
  },
  name: "Adrián Alcorta Puente",
  nickname: "Ardi",
  birthday: "Aug 23 1988 13:50:00 GMT+0200 (CEST)",
};
