---
title: "Rediseño mi web (sale mal)"
subtitle: "Mi periplo a través del CSS Tipado"
date: "2024-08-08T17:50:10.0100"
type: "blog"
description: "Cada uno o dos años me gusta dar un lavado de cara de mi web. Esta vez intenté usar una librería de CSS que, desgraciadmente, no funcionó."
featuredImage: ""
category:
  - Memorias
---

Esta web es para mí una especie de campo de pruebas; siempre que la rediseño (cada uno o dos años) trato de incluir alguna tecnología nueva. Bien sea un _framework_ de CSS, alguna característica nueva de Next.js o bien una nueva librería.

Tampoco me complico en exceso, utilizo Figma para crear un boceto de lo que quiero y enseguida lo empiezo a programar.

![Un esbozo de mi nueva web en Figma](./figma.png)

En esta ocasión, lo que he querido hacer ha sido simplemente incluir una nueva forma de manejar el CSS y alguna que otra refactorización; añadir nuevas secciones como una [integración con Pixelfed](/fotos) o esta nueva página de **Memorias**. Tradicionalmente he usado _CSS Modules_ y, aunque me gusta cómo funciona, no veía que fuese la solución más óptima.

## Mal hecho

Comencé dándole vueltas a varias opciones como _Tailwind_, _Styled Components_ y alguna que otra librería. Al final decidí utilizar [Vanilla Extract](https://vanilla-extract.style/). La idea de utilizar _Typescript_ y _CSS_ parecía atractiva y fácil de implementar.

Aún con la decisión tomada, decidí preguntar en **Mastodon** la opinión del público.

<iframe src="https://mastodon.social/@ardillan/115168997259086722/embed" class="mastodon-embed"  width="100%" > </iframe>

A lo que mi compadre Víctor respondió:

<iframe src="https://mastodon.social/@dj_uve/115169502512009524/embed" class="mastodon-embed" width="100%" > </iframe>

## Tenía que haberle hecho caso

Utilizar una solución como Vanilla Extract es algo así como matar moscas a cañonazos o reinventar la rueda. No voy a negar que me gustaría explorar alguna que otra opción, pero la verdad es que _CSS Modules_ funciona a la perfección. Por eso, desistí en mi intento y comencé a refactorizar la web mezclando ambas soluciones, algo que tengo planteado migrar poco a poco de vuelta a _CSS Modules_.

Ahora mismo la web funciona a medio gas. El modo oscuro no está del todo optimizado, las tecnologías están mezcladas y hay un batiburrillo que me gustaría haber evitado.

Si algo funciona, a veces no es tan necesario que lo toques.
