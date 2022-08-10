<!DOCTYPE html>
<html lang="en" id="regPage">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Parth Savaliya">
<meta name="email" content="sava0184@algonquinlive.com">
<meta name="date" content= "2022-05-10" > 
<link rel="stylesheet" href="Assignment2.css">
<script src="Assignment2.js"></script>

<title>Registration</title>
</head>
<body id="regBody">
  
<header></header>
<div class="wrapper">
    <div class="title-text">
      <div class="title login">Login Form</div>
      
    </div>
    <div class="form-container">
    
      <div class="form-inner">
        
        
        <form name="login" action="show.php" class="login" method="post" onsubmit="return validate();">
        <?php if (isset($_GET['error'])) { ?>
          <p class="error"><?php echo $_GET['error']; ?></p>
          <?php } ?>
          <div class="field">
            <input type="text" placeholder="Email Address" id="emails" name="emails">
            <p id="ealert" class="fields"></p>
          </div>
          <div class="field">
            <input type="password" id="password" name="password" placeholder="Password" >
           &nbsp; <p id="palert" class="fields"></p>
          </div>
  
          <div class="field btn">
            <div class="btn-layer"></div>
            <input type="submit" value="Login">
          </div>
          <div class="signup-link">Not a member? <a href="signup.html">Signup now</a></div>
        </form>
        <?php 


  

  
  
  

?>



      </div>
    </div>
  </div>
  <script src="validate.js"></script>


</body>
</html>