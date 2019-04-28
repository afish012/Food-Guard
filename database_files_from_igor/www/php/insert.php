<?php
 include "db.php";
 if(isset($_POST['insert']))
 {
 $username=$_POST['username'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 $q=mysqli_query($con,"INSERT INTO `user_login` (`username`,`email`,`password`) VALUES ('$username','$email','$password')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>
