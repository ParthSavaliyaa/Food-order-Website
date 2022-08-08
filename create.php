<?php

require_once('db_credentials.php');
require_once('database.php');

$db = db_connect();

  // Handle form values sent by new.php
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
 $email = $_POST['email'] ;
 $password = $_POST['password'];

  $sql = "INSERT INTO demo.customers (email, password) VALUES ('$email','$password')";
$result = mysqli_query($db, $sql);
    // For INSERT statements, $result is true/false
    
  
  
  }
?>