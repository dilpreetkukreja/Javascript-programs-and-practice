<?php
class Cart {
 var $products = array();
 function Cart($products=array()) {
  $this -> products = $products;
 }
 function getProducts() {
  return $this -> products;
 }
 function countProduct($product) {
  if (!isset($this -> products[$product])) {
   return false;
  } else {
   return $this -> products[$product];
  }
 }
 function countTotal() {
  $return = 0;
  foreach ($this -> products as $product => $count) {
   $return+= $count;
  }
  return $return;
 }
 function addProduct($product) {
  if ($this -> countProduct($product)) {
   $this -> products[$product]++;
  } else {
   $this -> products[$product] = 1;
  }
  return true;
 }
 function removeProduct($product) {
  if (!$this -> countProduct($product)) {
   return false;
  } else {
   if ($this -> products[$product] > 1) {
    $this -> products[$product]--;
   } else {
    unset($this -> products[$product]);
   }
   return true;
  }
 }
 function processInput($data = array()) {
  $loop = isset($data["amount"]) ? $data["amount"] : 1;
  if (isset($data["action"])) {
   switch($data["action"]) {
    case "Add to cart":
     if (isset($data["product"])) {
      for ($i=0; $i<$loop; $i++) {
       $this -> addProduct($data["product"]);
      }
     }
    break;
    case "remove":
     if (isset($data["product"])) {
      for ($i=0; $i<$loop; $i++) {
       $this -> removeProduct($data["product"]);
      }
     }
    break;
   }
  }
 }
}
?>