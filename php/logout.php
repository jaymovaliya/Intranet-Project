<?php
session_start();
unset($_SESSION['username']);
session_destroy();

header("location:http://localhost/test/Intranet/php/login.html");
exit;
?>