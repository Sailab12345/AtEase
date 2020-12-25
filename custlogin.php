<?php
include('config.php');

if($_POST){
   
    $nm=$_POST['name'];
    $ph=$_POST['phno'];

    if($nm!="" && $ph!="" ){
        $query="INSERT INTO `customer`  (`name`,`phno`) VALUES ('".$nm."','".$ph."')";
        if(mysqli_query($conn,$query)){
    
            echo "Logged in successfully";
        }
        else{
            echo "Error:".$query."<br>".$conn->error;
        }
    }
    else{
        echo "All fields are mandatory";
    
    }
}