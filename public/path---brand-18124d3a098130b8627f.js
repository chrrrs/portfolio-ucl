webpackJsonp([56623861458364],{321:function(e,t){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>"Just basically think how you are going to change the world from your keyboard" - Miguel Hernandez</p>\n</blockquote>\n<p><img src="https://i.imgur.com/GtoKNZr.png" alt="alt text" title="Brand Præsentation"></p>\n<p>Dette projekt havde til formål at skabe en visuel identity omkring mig selv, som skal præsentere mig og mine egenskaber indenfor webudvikling.\nLogo\'et er baseret på at krumningen står for C\'et i Chris, hvor de tre streger er E\'et i Eckert. Ideen var at det skulle være meget <strong>simpelt</strong> og skulle være <strong>skalerbart</strong>, selv når det kommer op som favicon skal detaljerne være synlige.</p>\n<p><img src="https://i.imgur.com/B0YlstL.png" alt="alt text" title="Website Stack"></p>\n<p>Hjemmesiden gøre brug af <strong>GatsbyJS</strong> en "static site generator" der omformer ens React kode til statiske HTML filer. Dette gør det blandt andet muligt at\nhente ændringer gennem den <strong>Virtuelle DOM</strong> og dermed ændres kun de elementer som rent faktisk bliver ændret. Dermed skal der ikke laves et "call" til en server eller lign. Alt bliver ændret og hentet gennem JavaScript funktioner dette betyder at siden loader hurtigt.</p>\n<p>Brugen af Gatsby og der igennem <strong>ReactJS</strong>, gør det også muligt at bruge ES6 features som arrow functions, spread operator m.m.\nAndre fordele er at koden og ens elementer, som navbar, kan gøres <strong>modulert</strong>. Koden kan bruges forskellige steder og essentielle dele som tekst bliver ændret igennem props.\nDesuden bliver modulariteten gjort overskuelig gennem brugen af <em>JSX</em>, da HTML tags og JavaScript skrives i en og samme fil.</p>\n<pre><code>const TemplateWrapper = ({ children }) => (\n  &#x3C;div>\n    &#x3C;Helmet\n      title="Chris Eckert - Portfolio"\n      link={[\n        {href: "/static/favicon.ico", rel: \'icon\'}\n      ]}\n      meta={[\n        { name: \'description\', content: \'Sample\' },\n        { name: \'keywords\', content: \'sample, something\' },\n      ]}\n      script={[{src: "/static/font-awesome/js/fontawesome-all.min.js"}]}\n    />\n    &#x3C;Navbar />\n    &#x3C;div>\n      { children() }\n    &#x3C;/div>\n    &#x3C;Footer />\n  &#x3C;/div>\n)\n\nTemplateWrapper.propTypes = {\n  children: PropTypes.func,\n}\n\nexport default TemplateWrapper\n</code></pre>\n<p>Yderlige fordele ved at bruge Gatsby er <strong>GraphQL</strong>, der hjælper med at samle den data som f.eks. fås gennem en <em>api</em>. Denne gør det overskueligt hvilket <em>GET request</em> man skal lave for at få præcis den data der søges.</p>\n<pre><code>  query BlogPostByPath($path: String!) {\n    markdownRemark(frontmatter: { path: { eq: $path } }) {\n      html\n      frontmatter {\n        date(formatString: "MMMM DD, YYYY")\n        path\n        title\n      }\n    }\n  }\n</code></pre>\n<p>Helt konkret bruger jeg GraphQl til at få fat i de <strong>markdown</strong> filer som jeg skriver mine "blog" opslag i og laver disse data om til HTML med plugin\'et <em>gatsby-transform-remark</em>. GraphQL henter elementerne og sender dem tilbage til en <em>arrow funktion</em> som et dataset. Her kan de enkelte elementer hentes ud og lægges ind i min post template.</p>\n<pre><code>---\npath: "/brand"\ndate: "2017-07-12T17:12:33.962Z"\ntitle: "Personal Brand Udvikling"\n---\n>"Just basically think how you are going to change the world from your keyboard" - Miguel Hernandez\n\n![alt text][brand]\n\n[brand]: https://i.imgur.com/97aKVZQ.jpg "Brand Præsentation"\n\nDette projekt havde til formål at skabe en visuel identity omkring mig selv, som skal præsentere mig og mine egenskaber indenfor webudvikling.\n</code></pre>\n<p>I nederstående eksempel kan der ses hvordan dataen bliver sendt fra GraphQL elementet til Template funktionen. Efterfølgende bliver dette gemt på <em>post</em> konstanten. De enkelte markdown værdier tilføjes på HTML elementerne som props.</p>\n<pre><code>import React from \'react\';\nimport Helmet from \'react-helmet\';\n\nexport default function Template({data}) {\n  const post = data.markdownRemark;\n  return (\n    &#x3C;div className="container needs-air is-fullheight hero">\n     &#x3C;Helmet title={`Chris Eckert - ${post.frontmatter.title}`} />\n      &#x3C;div className="blog-post content needs-air">\n        &#x3C;h1>{post.frontmatter.title}&#x3C;/h1>\n        &#x3C;div\n          className="blog-post-content image"\n          dangerouslySetInnerHTML={{ __html: post.html }}\n        />\n      &#x3C;/div>\n    &#x3C;/div>\n  );\n}\n</code></pre>\n<p>Udover dette har jeg brugt <strong>Bulma</strong> som CSS framework til at hjælpe med responsivitet og element opbygning. Jeg syntes personligt Bulma har en mere klar syntaks ift. Bootstrap.</p>\n<p><img src="https://i.imgur.com/8JCGPOw.png" alt="alt text" title="Chris Eckert Website"></p>',frontmatter:{date:"July 12, 2017",path:"/brand",title:"Personal Brand Udvikling"}}},pathContext:{}}}});
//# sourceMappingURL=path---brand-18124d3a098130b8627f.js.map