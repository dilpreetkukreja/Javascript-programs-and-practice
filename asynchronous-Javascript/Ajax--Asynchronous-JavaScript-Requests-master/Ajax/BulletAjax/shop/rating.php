<?php
include_once("session.php");
if (!isset($id) && isset($_GET['product'])) {
 $id = $_GET['product'];
}
if (isset($_GET['product']) && $_GET['product'] == $id) {
 if (isset($_GET['rating'])) {
  $_SESSION[$id] = $_GET['rating'];
 }
}
if (isset($_SESSION[$id])) {
 echo '
 <p>Your rating:</p>
  <ul class="'.$_SESSION[$id].'">';
 } else {
 echo '
 <p>Rate this book:</p>
  <ul>';
}
echo '
   <li><a class="worst" title="hate it" href="?product='.$id.'&amp;rating=worst">1</a></li>
   <li><a class="bad" title="don\'t like it" href="?product='.$id.'&amp;rating=bad">2</a></li>
   <li><a class="fair" title="it\'s fine" href="?product='.$id.'&amp;rating=fair">3</a></li>
   <li><a class="good" title="like it" href="?product='.$id.'&amp;rating=good">4</a></li>
   <li><a class="best" title="love it" href="?product='.$id.'&amp;rating=best">5</a></li>
  </ul>';
?>