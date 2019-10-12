<?php

$products = array(
 1 => array(
  "id" => "zeldman",
  "cover" => "zeldman.jpg",
  "title" => "Designing with Web Standards",
  "author" => "Jeffrey Zeldman"
 ),
 2 => array(
  "id" => "veen",
  "cover" => "veen.jpg",
  "title" => "The Art and Science of Web Design",
  "author" => "Jeffrey Veen"
 ),
 3 => array(
  "id" => "krug",
  "cover" => "krug.jpg",
  "title" => "Don't Make Me Think",
  "author" => "Steve Krug"
 )
);

foreach ($products as $product) {
 echo '
<div class="product" id="'.$product["id"].'">
 <dl class="info">
  <dt>'.$product["title"].'</dt>
  <dd>by '.$product["author"].'</dd>
 </dl>
 <img class="cover" src="images/'.$product["cover"].'" alt="'.$product["title"].'" />
 <div class="rating">';
 $id = $product["id"];
 include "rating.php";
 echo '
 </div>
 <form class="shopping" method="post" action="index.php">
  <fieldset>
   <input type="text" class="amount" name="amount" value="1" />
   <input type="hidden" name="product" value="'.$product["title"].'" />
   <input type="submit" name="action" value="Add to cart" />
  </fieldset>
 </form>
</div>
';
}
?>