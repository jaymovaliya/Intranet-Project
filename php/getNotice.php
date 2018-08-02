<?php
	$id = $_POST['id'];
	$edata = array();
	$fdata = array();
	$conn = mysqli_connect('localhost','root','','intra');
	
	if($conn)
	{
		$data = array();
		$data['edata'] = array();
		$data['fdata'] = array();

		$query = "Select * from notice where notice_id='$id'";
		$query2 = "Select fname from notice_file where Id='$id'";

		$result = mysqli_query($conn, $query);
		$result2 = mysqli_query($conn, $query2);

		if($result && $result2)
		{
			$ndata = mysqli_fetch_assoc($result);
			//$fdata = mysqli_fetch_assoc($result2);
			array_push($data['edata'], $ndata);

			while($row = mysqli_fetch_array($result2))
			{
				$fill = array();
				$fill['fname'] = $row['fname'];
				array_push($data['fdata'],$fill);
			}

			$obj = json_encode($data);
			echo $obj;
		}
		else
		{
			echo 'Data Not Selected...!!!';
		}		
	}
	else
	{
		echo 'Connection Error';
	}
?>