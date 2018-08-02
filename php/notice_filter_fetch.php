<?php
	
$conn = mysqli_connect('localhost','root','','intra');
	$yr= $_POST['year'];
	$sem1;
	$sem2;

	if($yr>0){
		if($yr==1){
			$sem1=1;
			$sem2=2;
		}elseif($yr==2){
			$sem1=3;
			$sem2=4;
		}elseif ($yr==3) {
			$sem1=5;
			$sem2=6;
		}elseif ($yr==4) {
			$sem1=7;
			$sem2=8;
		}
		$query="select notice_id,notice_title from notice where semester='$sem1' or semester='$sem2'";
	}
	else{
		$query="select notice_id,notice_title from notice ";
	}

	

	$result = mysqli_query($conn, $query);
	$outp = array();
	
	$outp = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($outp);

?>