<?php
include_once "session.php";
__autoload("Cart");
if (!isset($_SESSION["cart"])) {
 $_SESSION["cart"] = new Cart();
}
if (count($_POST)>0) {
 $_SESSION["cart"] -> processInput($_POST);
}
if ($_SESSION["cart"] -> countTotal() < 1) {
 echo '
 <p>Your shopping cart is empty</p>
';
} else {
 echo '
  <table>
   <thead>
    <tr>
     <th>Item</th>
     <th><abbr title="quantity">Qty</abbr></th>
    </tr>
   </thead>
   <tbody>';
 foreach ($_SESSION["cart"] -> getProducts() as $product => $count) {
  echo '
    <tr>
     <td>'.stripslashes($product).'</td>
     <td>'.$count.'</td>
    </tr>';
   }
 echo '
  </tbody>
 </table>
';
}
?>