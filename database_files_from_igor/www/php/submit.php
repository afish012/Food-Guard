<?php
 include "db.php";
 if(isset($_POST['submit']))
 {
 $user_id=$_POST['user_id'];
 $allergy_id=$_POST['allergy_id'];
 $q=mysqli_query($con,"INSERT INTO `user_allergies` (`user_id`,`allergy_id`) VALUES ('$user_id','$allergy_id')");
 if($q)
  echo "success";
 else
  echo "error";
 }
 ?>