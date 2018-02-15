---
path: "/lions"
date: "2017-07-12T17:12:33.962Z"
title: "CMS for lions"
---
> Dette var det første projekt hvor jeg arbejdede med PHP.
> Grundet den store fokus på CMS integrationen og at gøre så meget som muligt customizable blev mobil venligheden ned prioriteret.
> Da jeg i tidligere projekter har fremvist, at jeg forstår brugen af flexbox og andre midler til at gøre hjemmesider responsive.

![alt text][lions]

[lions]: https://i.imgur.com/4rvdGrw.png "Lions Website"
> [Hjemmesiden kan findes her](http://ekkato.dk/lions_1/index.php) - Brugernavn: admin & adgangskode: 123

text

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

text

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

text
