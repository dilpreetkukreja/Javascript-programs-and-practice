<?php include_once("session.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8" />
 <title>Bulletproof Books</title>
 <link rel="stylesheet" media="screen" type="text/css" href="styles/basic.css" />
 <script type="text/javascript" src="javascript/hijax.js">
 </script>
</head>
<body>

<h1>Bulletproof Books</h1>

<div id="mainContent">

<?php include "products.php"; ?>

</div>

<div id="subContent">

<h2>Shopping Cart</h2>

<div id="basket">
<?php include "shoppingcart.php"; ?>
</div>

</div>

</body>
</html>