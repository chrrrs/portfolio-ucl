---
path: "/lions"
date: "2017-07-12T17:12:33.962Z"
title: "CMS for lions"
---
> Dette var det første projekt hvor jeg arbejdede med PHP.
> Grundet den store fokus på CMS integrationen og at gøre så meget som muligt customizable blev mobil venligheden ned prioriteret.

![alt text][lions]

[lions]: https://i.imgur.com/4rvdGrw.png "Lions Website"
> [Hjemmesiden kan findes her](http://ekkato.dk/lions_1/index.php) - Brugernavn: admin & adgangskode: 123

Klienten var **Lions Danmark**, hvor vores gruppe valgte at arbejde med *Lions Odense*. Formålet var at give de forældede klub sider et mere moderne redesign, og samtidig gøre det så let som muligt for klubbernes webmaster at lave ændringer på siden uden at skulle gå igennem et eksternt firma.

Jeg udviklede derfor et **Content Management System**, der ved hjælp af få kliks både gjorde det overskueligt og hurtigt at ændre nyheds- og eventopslag.
Hjemmesiden blev udviklet med **PHP** og en "backend" bestående af **JSON** data.

Nedenfor ses det, hvordan det modulære nyhedsopslag som *card* bliver indsat for hver enkelte nyhedsside, der er i JSON *array'et* $pages. Denne hentes ved hjælp af PHP funktionen *getData()*. Inden *array'et* bliver gemt på variablen, bliver metoden *array_reverse()* brugt for at vende det, da *CMS'et*, når man skaber et nyt opslag lægger det i enden af JSON *array'et*, men da det er nyheder, skal det nyeste object præsenteres først.

```
<?php
  $headTitle = "Artikler | Lions Odense";
  include('./functions.php');
  include('./assets/head_nav.php');

  $pages = array_reverse(getData());

?>

<section id="front-page-news">
  <ul id="front-cards">
    <?php foreach ($pages as $i => $page): ?>
    <li><?php include('./assets/card.php'); ?></li>
    <?php endforeach; ?>
  </ul>
</section>

```

![alt text][cms]

[cms]: https://i.imgur.com/vUf3UFh.png "CMS del af lions"

På billedet foroven ses der, hvad en *administrator* på hjemmesiden ville se, når han eller hun skal opdatere et opslag. Formularen finder det pågældende JSON **object** ved hjælp af et *Id* og præsenterer den pågældende data i de respektive felter, så det let ses, hvilken tekst man rent faktisk opdaterer. Når formularens knap bliver trykket sættes funktionen *updatePage()* i gang.

```
function updatePage() {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $preText = $_POST['preText'];
    $image = $_POST['image'];

    $data = [
      'title' => $title,
      'content' => $content,
      'preText' => $preText,
      'image' => $image
    ];

    $id = $_GET['id'];
    $pages = getData();
    $pages[$id] = $data;
    putData($pages);
  }

```

Funktionen *updatePage()* tager imod den **POST** data, der bliver sendt fra formularen, dette gemmes i variabler, som efterfølgende indsættes som data til nogle specifikke *keys* og danner et array med den nye data som *key value pairs*. Id'et hentes med **GET** og det nye array indføres på JSON objektet med den samme Id.
