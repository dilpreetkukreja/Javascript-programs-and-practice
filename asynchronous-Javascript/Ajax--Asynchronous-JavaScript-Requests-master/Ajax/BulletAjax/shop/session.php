<?php
session_start();
function __autoload($name) {
 require_once($name.".inc");
}
?>