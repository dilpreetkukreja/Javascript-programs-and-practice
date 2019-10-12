<?php
if (isset($_GET["person"])) {
  switch ($_GET["person"]) {
    case "andy":
      include "files/andy.html";
    break;
    case "richard":
      include "files/richard.html";
    break;
    case "jeremy":
      include "files/jeremy.html";
    break;
  }
}
?>