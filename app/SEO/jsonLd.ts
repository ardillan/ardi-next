import { ARDI } from "@/lib/constants";

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${ARDI.web.url}/#person`,
      name: ARDI.name,
      alternateName: ARDI.nickname,
      url: ARDI.web.url,
      sameAs: [
        "https://mastodon.social/@ardillan",
        "https://pixelfed.social/ardi",
        "https://github.com/ardillan",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${ARDI.web.url}/#website`,
      name: ARDI.web.title,
      url: ARDI.web.url,
      description: ARDI.web.description,
      inLanguage: "es-ES",
      publisher: {
        "@id": `${ARDI.web.url}/#person`,
      },
    },
  ],
};
