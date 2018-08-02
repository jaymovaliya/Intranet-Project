<?php
	$id = $_POST['fid'];
	echo $id;

	$fname = json_decode($_POST['fname']);

	$conn = mysqli_connect("localhost","root","","intra");
	
	if(isset($id) && isset($fname))
	{
			$flag = 0;
			foreach($fname as $file)
			{
				$query = "Insert into EventFiles values('".$id."','".$file."')";
				$result = mysqli_query($conn, $query);
				if(!$result)
				{
					$flag = 1;
				}
			}
			if($flag == 0)
			{
				echo "Files Inserted Successfully";
			}
			else
			{
				echo mysqli_error($conn);
			}
	}
?>