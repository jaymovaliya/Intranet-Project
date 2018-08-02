<?php
	$conn = mysqli_connect('localhost','root','','intra');

	$query="select notice_id,notice_title from notice";

	$result = mysqli_query($conn, $query);
	$outp = array();
	
	$outp = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($outp);

?>