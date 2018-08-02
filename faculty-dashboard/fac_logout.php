<?php
session_start();
unset($_SESSION['fac_username']);
session_destroy();

header("location:http://localhost/Intranet/faculty-dashboard/index.php");
exit;
?>