---
path: "/brand"
date: "2017-07-12T17:12:33.962Z"
title: "Personal Brand Udvikling"
---
>"Just basically think how you are going to change the world from your keyboard" - Miguel Hernandez

![alt text][brand]

[brand]: https://i.imgur.com/GtoKNZr.png "Brand Præsentation"

Dette projekt havde til formål at skabe en visuel identity omkring mig selv, som skal præsentere mig og mine egenskaber indenfor webudvikling.
Logo'et er baseret på at krumningen står for C'et i Chris, hvor de tre streger er E'et i Eckert. Ideen var at det skulle være meget simpelt og skulle være skalerbart, selv når det kommer op som favicon skal detaljerne være synlige.

![alt text][stack]

[stack]: https://i.imgur.com/B0YlstL.png "Website Stack"

Hjemmesiden gøre brug af GatsbyJS en "static site generator" der omformer ens React kode til statiske HTML filer. Dette gør det blandt andet muligt at
hente ændringer gennem den Virtuelle DOM og dermed ændres kun de elementer som rent faktisk bliver ændret. Dermed skal der ikke laves et "call" til en server eller lign. Alt bliver ændret og hentet gennem JavaScript funktioner dette betyder at siden loader hurtigt.

Brugen af Gatsby og der igennem ReactJS, gør det også muligt at bruge ES6 features som arrow functions, spread operator m.m.
Andre fordele er at koden og ens elementer, som navbar, kan gøres modulert. Koden kan bruges forskellige steder og essentielle dele som tekst bliver ændret igennem props.
Desuden bliver modulariteten gjort overskuelig gennem brugen af JSX, da HTML tags og JavaScript skrives i en og samme fil.

```
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chris Eckert - Portfolio"
      link={[
        {href: "/static/favicon.ico", rel: 'icon'}
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[{src: "/static/font-awesome/js/fontawesome-all.min.js"}]}
    />
    <Navbar />
    <div>
      { children() }
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

```

Yderlige fordele ved at bruge Gatsby er GraphQL, der hjælper med at samle den data som f.eks. fås gennem api. Denne gør det overskueligt hvilket call man skal lave for at få den rigtige data.

```
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
```

Helt konkret bruger jeg GraphQl til at få fat i de markdown filer som jeg skriver mine "blog" opslag i og laver disse data om til HTML med plugin'et gatsby-transform-remark. GraphQL henter elementerne og sender dem tilbage til en arrow funktion som et dataset. Her kan de enkelte elementer hentes ud og lægges ind i min post template.

```
---
path: "/brand"
date: "2017-07-12T17:12:33.962Z"
title: "Personal Brand Udvikling"
---
>"Just basically think how you are going to change the world from your keyboard" - Miguel Hernandez

![alt text][brand]

[brand]: https://i.imgur.com/97aKVZQ.jpg "Brand Præsentation"

Dette projekt havde til formål at skabe en visuel identity omkring mig selv, som skal præsentere mig og mine egenskaber indenfor webudvikling.
```

I nederstående eksempel kan der ses hvordan dataen bliver sendt fra GraphQL elementet til Template funktionen. Efterfølgende bliver dette gemt på post konstanten. De enkelte markdown værdier tilføjes på HTML elementerne igennem template strings.

```
import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
  const post = data.markdownRemark;
  return (
    <div className="container needs-air is-fullheight hero">
     <Helmet title={`Chris Eckert - ${post.frontmatter.title}`} />
      <div className="blog-post content needs-air">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content image"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

```

Udover dette har jeg brugt Bulma som CSS framework til at hjælpe med responsivitet og element opbygning. Jeg syntes personligt Bulma har en mere klar syntaks ift. Bootstrap.

![alt text][website]

[website]: https://i.imgur.com/8JCGPOw.png "Chris Eckert Website"
