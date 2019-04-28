<?php
 include "db.php";
 if(isset($_POST['update']))
 {
 $id=$_POST['id'];
 $username=$_POST['username'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 $q=mysqli_query($con,"UPDATE `user_login` SET `username`='$username',`email`='$email',`password`='$password' where `id`='$id'");
 if($q)
 echo "success";
 else
 echo "error";
 }
 ?>
