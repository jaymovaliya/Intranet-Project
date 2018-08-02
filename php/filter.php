<?php
	$datefrom = $_POST['datefrom'];
	$dateto = $_POST['dateto'];

	$fdate = date('Y-m-d', strtotime($datefrom));
	$tdate = date('Y-m-d', strtotime($dateto));

	$conn = mysqli_connect('localhost','root','','intra');

	if($conn)
	{
		
			$query = "Select Id, ename from events where date_from>='$fdate' AND date_to<='$tdate'";
			
			$result = mysqli_query($conn, $query);
			
			if($result)
			{
				/*$vdata = array();
				$kdata = array();
				$i = 0;
				while($data = mysql_fetch_array($result))
				{
					$kdata[$i++] = $data['Id'];
					$vdata[$i++] = $data['ename'];
				}
				$arr = array_combine($kdata, $vdata);*/
				$arr = array();
				$arr = $result->fetch_all(MYSQLI_ASSOC);
				$data = json_encode($arr);
				echo $data;
			}
			else
			{
				echo 'Data Not Selected...!!!';
			}		
	}
	else
	{
		echo "Connection Error";
	}
?>
