<?php

	$conn = mysqli_connect('localhost','root','','intra');

	if($conn)
	{
		
			$query = "Select Id, ename from events";
			
			$result = mysqli_query($conn, $query);
			$arr = array();
			$arr = $result->fetch_all(MYSQLI_ASSOC);
			$data = json_encode($arr);
			echo $data;
				
	}
	else
	{
		echo "Connection Error";
	}
?>
