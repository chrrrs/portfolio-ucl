---
path: "/exam"
date: "2017-07-12T17:12:33.962Z"
title: "Eksamensprojekt"
---

![alt text][app]

[app]: https://i.imgur.com/97aKVZQ.jpg "App Multi Pages"
> [Hjemmesiden kan findes her](http://ekkato.dk/vs_app/index.php) - Username: Admin & Password: Admin213 & Connect Code: FqM8HBPbtTeWYZKwM3

Til andet semester eksamen var Valdemar Slot klienten. De ønskede en digital løsning, der ville få deres primære målgruppe *børnefamilier* til at besøge slottet uden for højsæsonen. **webapplikation** var baseret på et allerede populært koncept for slottet **Skattejagten**, dog med et twist i form af de sæsonspecifikke ruter. Konceptet var, at barn og voksen hver skulle have en del af app'en, og dermed hjælpe hinanden igennem slottet for at vinde.

De to app's blev ikke forbundet reelt i dette koncept, dette kunne være opnået igennem **AJAX** eller **Websockets**, dog forhindrede opgavebeskrivelsen brugen af disse teknologier.

![alt text][parent]

[parent]: https://i.imgur.com/MSXTDDk.png "Parent Pages"

Forældre delen af app'en ville indebære, at man logger ind med en email eller *social media account* gennem **Passport.js**. Dette blev gemt i en JSON fil med bruger oplysninger, til dels for at forbinde barnet til forældre versionen og gemme data på forældrens bruger, men også til senere at udsende *nyhedsbreve* samt *tilbud* til den, der har downloadet app'en.

```
<?php
  include('../assets/html_head.php');
  include('../functions.php');
  $data = getData();
  $routes = $data['app_routes'];
?>

  <?php foreach ($routes as $route): ?>
    <div class="parent-trophy-container">
      <span><i class="fa fa-trophy"></i></span>
      <div class="parent-trophy-content">
        <h3><?php echo $route['title']; ?></h3>
        <p><?php echo $route['description']; ?></p>
      </div>
    </div>
  <?php endforeach; ?>

```

Her hentes *app_routes* ud fra **JSON** objektet med *getData()* funktionen, og der bruges et **foreach loop** til at præsentere hver enkelt rute på forældrens app, så de kan holde styr på, hvilke ruter, der er bestået, og hvilke der ikke er vundet endnu.

![alt text][Child]

[Child]: https://i.imgur.com/7D1CMsP.png "Children Pages"

På versionen til børn skulle de blot forbinde sig til forældrenes app gennem en unik kode, som genereres ud fra forældrens brugeroplysninger. Efterfølgende vil det være muligt at se spørgsmål, der ved hjælp af forældrenes kort skal navigere dem rundt på slottet. Barne versionen er meget farverig og er baseret på virkelige interviews.

```
include('../functions.php');

parse_str($_SERVER['QUERY_STRING'], $qs);
$routeId = $qs['route'];
$questionId = $qs['question'];
$answerId = $qs['answer'];
$data = getData();

$routes = $data['app_routes'];
$route = null;
$question = null;

foreach($routes as $struct) {
  if($struct['id'] == $routeId) {
    $route = $struct;
    break;
  }
}

$questions = $route['questions'];
foreach($questions as $struct) {
  if($struct['id'] == $questionId) {
    $question = $struct;
    break;
  }
}

```

Den ovenstående kode viser, hvordan **applikationens logik** fungerer. For at vide, hvilken rute og spørgsmål barnet befinder sig på bliver der sendt og hentet elementer fra **query** strengen. Der bliver tjekket, om **JSON** filen indeholder et objekt med det samme **Id** som fremfindes i *query strengen*, når et match findes, er den pågåldende rute fundet og gemmes i en ny variabel for at kunne finde spørgsmålene i dette objekt eller rute. Dette gøres principielt på samme måde ved at tjekke om *query strengens* spørgsmåls *Id* er det samme som et i ruten. Til sidst vil der blive tjekket, om det som barnet svarer er rigtigt og en **property** på JSON objektet vil ændres *isAnswered*, og barnet vil blive sendt videre.
