<?php
	
	function returnJSON($conn,$sql){
		header('Content-Type: application/json');
		$res = "";
		$result = mysqli_query($conn,$sql);
		
		if($result->num_rows > 0){
			$num = $result->num_rows - 1;
			$res = $res . "[";
			while($row = $result->fetch_assoc()){
				$res = $res . json_encode($row);
				if($num > 0){
					$res = $res . ",";
					$num -= 1;
				}	
			}
			$res = $res . "]";
		}
		echo $res;
	}

	function test_input($data){
		$data = trim($data);
  		$data = stripslashes($data);
  		$data = htmlspecialchars($data);
  		return $data;
	}

	function append($sql,$pname,$pval){
		#echo "in append<br>";
		switch ($pname) {
			case 'Date From':
				$date = date_create($pval);
				$fdate = date_format($date, "Y-m-d");
				$sql = $sql . "`Date From` > '" . $fdate ."'";
				break;

			case 'Date To':
				$date = date_create($pval);
				$fdate = date_format($date, "Y-m-d");
				$sql = $sql . "`Date From`" . " < '" . $fdate ."'";
				break;				

			case 'Time From':
				$t = date('H:i:s',strtotime($pval));
				$sql = $sql . "`Time From`" . " > '" . $t . "'"; 
				break;

			case 'Time To':
				$t = date('H:i:s',strtotime($pval));
				$sql = $sql . "`Time From`" . " < '" . $t . "'";
				break;

			case 'ftle':
				$sql = $sql . "`Files-Total`" . "<" . $pval;
				break;

			case 'ftge':
				$sql = $sql . "`Files-Total`>" . $pval;
				break; 

			case 'itle':
				$sql = $sql . "`Images-Total`" . "<" . $pval;
				break;

			case 'itge':
				$sql = $sql . "`Images-Total`" . ">" . $pval;
				break;

			default:
				# code...
				$sql = $sql ."`". $pname . "`='" . $pval . "'";
				break;
		}
		return $sql;
	}

	if($_SERVER["REQUEST_METHOD"] != "POST"){
		die("must use POST method for this API!");
	}

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "intra";
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	$sql = "select * from events";

	if(isset($_POST["data"]) &&  !is_null($_POST["data"])){

		$sql = $sql . " where ";

		$a = explode(";", $_POST["data"]);
		$n = sizeof($a) - 1;

		foreach ($a as $para) {
			$tuple = explode("=", $para);
			$pname = test_input($tuple[0]);
			$pval = test_input($tuple[1]);
			$sql = append($sql,$pname,$pval);
			if( $n > 0 ){
				$sql = $sql . " and ";
				$n -= 1;
			}
		}
	}
	returnJSON($conn,$sql);	
?>