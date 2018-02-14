---
path: "/exam"
date: "2017-07-12T17:12:33.962Z"
title: "Exam Project"
---

![alt text][app]

[app]: https://i.imgur.com/97aKVZQ.jpg "App Multi Pages"
> [Hjemmesiden kan findes her](http://ekkato.dk/vs_app/index.php) - Username: Admin & Password: Admin213 & Connect Code: FqM8HBPbtTeWYZKwM3

Semester Eksamen var baseret på at

The idea

![alt text][parent]

[parent]: https://i.imgur.com/MSXTDDk.png "Parent Pages"

forældre versionen

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

Forklar Foreach loopet

![alt text][Child]

[Child]: https://i.imgur.com/7D1CMsP.png "Children Pages"

børne versionen

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

Forklar kode
