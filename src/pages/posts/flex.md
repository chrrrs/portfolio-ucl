---
path: "/flex"
date: "2017-07-12T17:12:33.962Z"
title: "Diverse projekter"
---

![alt text][eco]

[eco]: https://i.imgur.com/3mglRIK.png "EcoSnap Website"
> [Hjemmesiden kan findes her](https://iamchrisjp.github.io/ecosnap/)

Totalt redesign af brand, visuel identitet og hjemmeside for startup virksomhed i Odense. Hjemmesiden er udviklet med **flexbox** for at skabe responsivitet så hjemmesiden, også så den er brugbar på håndholdte endheder, hvilket målgruppen gøre meget brug af.

Overordnet set har elementerne en *container*, som får **flex** værdien, for at gøre det muligt for de indre elementer at agere ift. de parameter som *flexbox* giver os. De indre elementer har en *order* værdi som forklarer, hvilken rækkefølge, de skal placeres i, når siden bliver skaleret ned. Samtidig har det indre element selv elementer med værdien *flex*, som derefter bliver placeret i en **column** for at arrangere elementerne lodret.

```
#product-content-container {
  display: flex;
  padding: 8rem 4rem;
  justify-content: center;
}

#phase-one {
  display: flex;
  flex-direction: column;
  order: 1;
}
```

![alt text][Flex]

[Flex]: https://i.imgur.com/EcxVJne.png "Flex Øvelses Website"
> [Hjemmesiden kan findes her](https://iamchrisjp.github.io/Jupiter_recreation/)

En genskabelse af **Jupiter** hjemmesiden, der bruger de samme **flexbox** egenskaber til at gøre hjemmesiden skalerbar som i projektet foroven .

```
#teaser-content-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10rem;
}

#teaser-content-container img {
  margin-left: 12rem;
  order: 1;
}

#teaser-content {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-right: 12rem;
  order: 2;
}
```
