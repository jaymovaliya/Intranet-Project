<?php
session_start();
require("dbcontroller.php");
$db_handle = new DBcontroller();
$a = $_POST['uname'];
$b = $_POST['pwd'];
$query ="SELECT * FROM student_detail WHERE stu_id = '" . $_POST["uname"] . "' && password = '" . $_POST["pwd"] . "'";
$t = $db_handle->numRows($query);
$row = $db_handle->runQuery($query);
echo $t;
if($t==1){
$_SESSION['username']=$a; 
header('Location: http://localhost/test/Intranet/');
}
else
{
	echo "Wrong detail";
}
?>