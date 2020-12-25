<?php

include('config.php');

if($_POST){
$nm=$_POST['name'];
$ph=$_POST['phno'];
$city=$_POST['city'];
$service=$_POST['service'];


if($nm!="" && $ph!="" && $service!="" ){
    $query="INSERT INTO `employee`  (`name`,`phno`,`city`,`service`) VALUES ('".$nm."','".$ph."','".$city."','".$service."')";
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
