<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "intra";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	} 
	
	$stmt = $conn->prepare("insert into events (Done,`Event Name`,`Event Description`,`Date From`,`Date To`,Location,`Expert Name`,`Expert Description`,Sponsor,Beneficiaries,`Program Coordinators`,Files-Total,Images-Total) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

	$stmt->bind_param("issssssssssssii",$done,$ename,$edesc,$dtfrom,$dtto,$timefrom,$timeto,$loc,$expname,$expdesc,$sponsor,$ben,$coord,$ftotal,$itotal);

	$done = 0;
	$ename = $_POST["ename"];
	$edesc = $_POST["desc"];
	$dtfrom = $_POST["dtfrom"];
	$dtto = $_POST["dtto"];
	$timefrom = $_POST["timefrom"];
	$timeto = $_POST["timeto"];
	$loc = $_POST["loc"];
	$expname = $_POST["exp"];
	$expdesc = $_POST["edesc"];
	$beneficiaries = $_POST["ben"];
	$coord = $_POST["coordinators"];
	$ftotal = $_POST["ftotal"];
	$itotal = $_POST["itotal"];

	$stmt->execute();
	$stmt->close();
	$conn->close();
?>