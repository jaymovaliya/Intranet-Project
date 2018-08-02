<?php
require("dbcontroller.php");
$db_handle = new DBcontroller();
//$str = 'C:/xampp/htdocs/test/Intranet/php/material/'.$id.'*';
$str2 = 'http://localhost/Intranet/php/labmanual/'; 
$query ="SELECT filename FROM manuals WHERE sub_code = '" . $_POST["sub_id"] . "'";
	$results = $db_handle->runQuery($query);
?>
<?php
foreach ($results as $filename) {
?>
   <a class="list-group-item" href="<?php echo $str2.$filename["filename"]?>"><?php echo $filename["filename"]?></a>
<?php
}
?>