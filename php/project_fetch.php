<?php

	$conn=mysqli_connect("localhost","root","jay@1107","intra");
			$type=$_POST['sem'];

	
			$query = "Select project_id,project_title from project where project_type='$type'";
			
			$result = mysqli_query($conn, $query);
			$arr = array();
			$arr = $result->fetch_all(MYSQLI_ASSOC);
			$data = json_encode($arr);
			echo $data;
				
?>
