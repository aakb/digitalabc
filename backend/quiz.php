<?php
function getQuestions() {
  $questions = file_get_contents("questions.json");

  echo $questions;
}

getQuestions();