<?php

header('Access-Control-Allow-Origin: *');

$action = "";
if (isset($_POST["action"])) {
  $action = $_POST["action"];
} else if (isset($_GET["action"])) {
  $action = $_GET["action"];
}

if ($action == "") {
  return;
}

switch ($action) {
  case "questions":
    $questions = file_get_contents("questions.json");
    echo $questions;
    break;

}
