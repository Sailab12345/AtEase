<?php
include('config.php');

$method= $_SERVER['REQUEST_METHOD'];
//$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

$serv='Carpenter';
if ($method=="GET"){
    
   // $service= $_GET['service'];
    $sql= "SELECT  *  from `employee` WHERE (employee.service='".$serv."')";
}

$result= mysqli_query ($conn,$sql);
/*if($result){
    echo "Done";
}
else{
    echo "ERROR";
}*/

if (!$result) {
    
    echo "ERROR!!!";
    http_response_code(404);
    die(mysqli_error($conn));
    
}
else{
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
}
header('Content-Type: application/json');
echo mysqli_affected_rows($conn);
echo "Successfull";

?>
