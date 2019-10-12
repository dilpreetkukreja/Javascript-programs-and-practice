<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <title>People at Clearleft</title>
  <style type="text/css">
  @import url("clearleft.css");
  </style>
  <script type="text/javascript" src="ajax.js"></script>
</head>
<body>
  <p class="opt-in-question">
    <label>
Would you like to be informed of changes made to the page by JavaScript?
      <input type="checkbox" id="alert-opt-in" />
    </label>
  </p>
  <h1>People</h1>
  <ul id="people">
    <li>
      <a href="?person=andy">Andy</a>
    </li>
    <li>
      <a href="?person=richard">Richard</a>
    </li>
    <li>
      <a href="?person=jeremy">Jeremy</a>
    </li>
  </ul>
  <div id="details">
<?php include "people.php"; ?>
 </div>
</body>
</html>