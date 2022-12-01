<?php

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $user = "dostggnn_doyoenk";
    $pass = "lemonqu2329*"; 
    $url = "localhost";
    $db = "dostggnn_database";

    $link = mysqli_connect($url, $user, $pass, $db, "3306");

    if(!$link) {
      error_log("Connection error: " . mysqli_connect_error());
    }


?>