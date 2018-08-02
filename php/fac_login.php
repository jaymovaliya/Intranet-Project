<?php
session_start();
require("dbcontroller.php");
$db_handle = new DBcontroller();
$a = $_POST['uname'];
$b = $_POST['pwd'];
$query ="SELECT fd.F_ID,Name FROM faculty_data fd INNER JOIN faculty f ON fd.F_id = f.F_id WHERE  Username = '" . $_POST["uname"] . "' && Password = '" . $_POST["pwd"] . "'";
$t = $db_handle->numRows($query);
$row = $db_handle->runQuery($query);
$n = $row['Name'];
echo $t;
if($t==1){
$_SESSION['fac_username']=$a; 
$_SESSION['fac_name']=$n;
header('Location: http://localhost/Intranet/faculty-dashboard/');
}
else
{
    echo "Wrong detail";
}
?>