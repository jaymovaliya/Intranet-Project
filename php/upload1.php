<?php
require("dbcontroller.php");
$db_handle = new DBcontroller();
$path = 'labmanual/';
$f = $_POST['name'];
//echo $f;
/* $fileName = $_SESSION['id'];
 		move_uploaded_file($_FILES["myfile"]["tmp_name"],$path.$fileName);*/
if(isset($_FILES["myfile"]))
{
	$ret = array();
	$error =$_FILES["myfile"]["error"];
	if(!is_array($_FILES["myfile"]["name"])) //single file
	{
		 $filename = $_FILES["myfile"]["name"];
         $ext = pathinfo($filename, PATHINFO_EXTENSION);
 	 	 $fileName = $f.'_manual.'.$ext;
 	        //$_FILES["myfile"]["name"];
 		move_uploaded_file($_FILES["myfile"]["tmp_name"],$path.$fileName);
 		$ret[] = $fileName;
 		$query ="INSERT INTO manuals (sub_code,filename) VALUES ('$f','$fileName')";
 		$db_handle->insertQuery($query);
 	}
	echo json_encode($ret);
}

?>