<?php
$path = 'photos/';


if(isset($_FILES["myfile"]))
{
	$ret = array();
	$error =$_FILES["myfile"]["error"];
	if(!is_array($_FILES["myfile"]["name"])) //single file
	{

 	 	 $fileName = $_FILES["myfile"]["name"];
 		move_uploaded_file($_FILES["myfile"]["tmp_name"],$path.$fileName);
 		$ret[] = $fileName;
 	}
	echo json_encode($ret);
}
?>