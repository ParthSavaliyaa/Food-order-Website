<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="style.css" />
</head>
<body>
  

<?php
require_once('db_credentials.php');
require_once('database.php');

$db = db_connect();
//access URL parameter
$email= $_POST['emails'] ;
$password = $_POST['password'];

        
  
$sql= "select * from customers where email = '$email' and password = '$password'";
$result_set = mysqli_query($db, $sql);
    
$result = mysqli_fetch_assoc($result_set);
if ($result){
    echo "successfull";
    header("location: index.html");
}else{
    header("Location: Registration.php?error=Incorect User name or password.Please try again");
}
  ?>
  
</body>
</html>