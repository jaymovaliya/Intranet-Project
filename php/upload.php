<?php
require("dbcontroller.php");
$db_handle = new DBcontroller();
$path = 'marks/';
$f = $_POST['name'];
if(isset($_FILES["myfile"]))
{
	$ret = array();
	$error =$_FILES["myfile"]["error"];
	if(!is_array($_FILES["myfile"]["name"])) //single file
	{

 	 	 $fileName = $_FILES["myfile"]["name"];
 		move_uploaded_file($_FILES["myfile"]["tmp_name"],$path.$fileName);
 		$ret[] = $fileName;
 		$query ="INSERT INTO marks (sub_code,filename) VALUES ('$f','$fileName')";
 		$db_handle->insertQuery($query);
 	}
	echo json_encode($ret);
}

?>