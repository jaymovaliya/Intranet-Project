<?php
	require("dbcontroller.php");
	$db_handle = new DBController();
	if(!empty($_POST["sem_id"])) {
		$query ="SELECT Code,Subject_name FROM syllabus WHERE Semester = '" . $_POST["sem_id"] . "'";
		$results = $db_handle->runQuery($query);
		$data = json_encode($results);
		echo $data;
	}
?>