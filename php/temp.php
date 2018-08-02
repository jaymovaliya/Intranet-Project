<?php
	$name = $_POST['ename'];
	$desc = $_POST['desc'];
	$datefrom = $_POST['datefrom'];
	$dateto = $_POST['dateto'];
	$timefrom = $_POST['timefrom'];
	$timeto = $_POST['timeto'];
	$loc = $_POST['loc'];
	$exname = $_POST['exname'];
	$exdesc = $_POST['exdesc'];
	$sponsor = $_POST['sponsor'];
	$sponsor = $_POST['sponsor'];
	$benifit = $_POST['benifit'];
	$coordinator = $_POST['coordinator'];
	$done = 1;
	
	/*
	$from_date = new DateTime($datefrom);
	$to_date = new DateTime($dateto);

	$from_date = mysql_real_escape_string($from_date->format('y-m-d'));
	$to_date = mysql_real_escape_string($to_date->format('y-m-d'));

	//$from_date = mysqli_real_escape_stringlink, $from_date->format('y-m-d'));	
	*/

	$fdate = date('Y-m-d',strtotime($datefrom));
	$tdate = date('Y-m-d',strtotime($dateto));

	$conn = mysqli_connect('localhost','root','','intra');

	$query = "Insert into events(done,ename,edesc,date_from,date_to,time_from,time_to,location,exname,exdesc,sponsor,benifits,coordinator) values('$done','$name','$desc','$fdate','$tdate','$timefrom','$timeto','$loc','$exname','$exdesc','$sponsor','$benifit','$coordinator')";
	$result = mysqli_query($conn,$query);

	$query2 = "Select MAX(id) as id from events";
	$res = mysqli_query($conn, $query2);

	if($result)
	{
		if($res)
		{
			$data = mysqli_fetch_row($res);
			echo json_encode($data);
		}
		//echo "Data Inserted Successfully";
	}
	else
	{
		echo mysqli_connect_error();
	}		
?>	