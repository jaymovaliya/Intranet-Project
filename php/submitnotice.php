<?php
$conn=mysqli_connect("localhost","root","","intra");
session_start();
$fac_name=$_SESSION['fac_username'];
if(!$conn){
	echo "error";
}

$notice_name=$_POST['noticeName'];
$notice_desc=$_POST['noticeDesc'];
$notice_date=$_POST['noticeDate'];
$notice_sem_select=$_POST['semSelect'];

$date = date('Y-m-d',strtotime($notice_date));

$query="Insert into notice values(null,'$fac_name','$notice_sem_select','$notice_name','$notice_desc','$date')";
$result=$conn->query($query);
$query2 = "Select MAX(notice_id) as id from notice";
$res = $conn->query($query2);
if($result)
{
	if($res)
	{
		$outp = array();

		$outp = $res->fetch_all(MYSQLI_ASSOC);

		echo json_encode($outp);
	}else{
		echo "string";
	}
				//echo "Data Inserted Successfully";
}
else
{
	echo mysqli_error($conn);
}		


?>