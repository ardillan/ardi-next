import { INavigationLink } from "@/interfaces/INavigationLink";
export const NAVIGATION: Array<INavigationLink> = [
  {
    title: "Inicio",
    path: "/",
    layout: "page",
    position: ["MainNavigation"],
  },
  {
    title: "Blog",
    path: "/blog",
    layout: "blog",
    position: ["MainNavigation"],
  },
  {
    title: "Memorias",
    path: "/memorias",
    layout: "memoirs",
    position: ["Footer"],
  },
  {
    title: "Fotos",
    path: "/fotos",
    layout: "pixelfed",
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
    position: ["MainNavigation"],
  },
];

export const RANDOMFACTS = [
  {
    fact: "haber completado {{Super Hexagon}}",
    link: "https://es.wikipedia.org/wiki/Super_Hexagon",
  },
  {
    fact: "ser fan de {{Scatman}}",
    link: "https://es.wikipedia.org/wiki/Scatman_John",
  },
  {
    fact: "gustarme la {{pizza con piña}}",
    link: "https://es.wikipedia.org/wiki/Sam_Panopoulos",
  },
  {
    fact: "hablar de {{Grim Fandango}}",
    link: "https://es.wikipedia.org/wiki/Grim_Fandango",
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

export const CONFIG = {
  IMAGES_LOCATION:
    "https://res.cloudinary.com/bestiario/image/upload/v1/ardi-monster",
};
