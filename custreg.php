<?php

include('config.php');

if($_POST){
$nm=$_POST['name'];
$ph=$_POST['phno'];
$un=$_POST['uname'];
$pas=$_POST['pass'];
$mail=$_POST['email'];

if($nm!="" && $ph!="" && $un!="" && $pas!="" && $mail!=""){
    $query="INSERT INTO `customer`  (`name`,`phno`,`username`,`password`,`email`) VALUES ('".$nm."','".$ph."','".$un."','".$pas."','".$mail."')";
    if(mysqli_query($conn,$query)){

        echo "Data saved successfully";
    }
    else{
        echo "Error:".$query."<br>".$conn->error;
    }
}
else{
    echo "All fields are mandatory";
}
}
?>
