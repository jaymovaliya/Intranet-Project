<?/*php
session_start();
if(!isset($_SESSION['username'])){
    header("location:http://localhost/test/Intranet/php/login.html");
}
*/?><!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>


<nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">CP-DEPARTMENT INTRANET</a>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" id="Homeli" href="#">Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="About_Departmentli" href="#About_Department">About Department</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Courseli" href="#Course">Course</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Projectsli" href="#Projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Notice_Boardli" href="#Notice_Board">Notice Board</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Eventsli" href="#Events">Events</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Counsellingli" href="#Counselling">Counselling</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Libraryli" href="#Library">Library</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="Placementsli" href="#Placements">Placements</a>
            </li>
            <!--<li class="nav-item my-2 my-lg-0">
                <a class="nav-link" id="Logout" href="php/logout.php">Logout</a>
            </li>
<!--            <li class="nav-item">-->
<!--                <a class="nav-link" href="#">Placement</a>-->
<!--            </li>-->

<!--            <li class="nav-item dropdown">-->
<!--                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>-->
<!--                <div class="dropdown-menu" aria-labelledby="dropdown01">-->
<!--                    <a class="dropdown-item" href="#">Action</a>-->
<!--                    <a class="dropdown-item" href="#">Another action</a>-->
<!--                    <a class="dropdown-item" href="#">Something else here</a>-->
<!--                </div>-->
<!--            </li>-->
        </ul>
<!--        <form class="form-inline my-2 my-lg-0">-->
<!--            <input class="form-control mr-sm-2" type="text" placeholder="Search">-->
<!--            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
<!--        </form>-->
    </div>
</nav>

<div class="row">
        <div class="col-md-10" id="main-content">
        </div>
        <div class="com-md-2">
            <div class="list-group" id="sidebar">
                <a href="owncloud/index.php" class="list-group-item">Own Cloud</a>
                <a href="w3school/w3schools/w3schools/index.html" class="list-group-item">W3Schools</a>
                <a href="iitb/" class="list-group-item">IITB Spoken Tutorials</a>
                <a href="iitb/c" class="list-group-item">C/C++ Language</a>
                <a href="iitb/python" class="list-group-item">Python Language</a>
                <a href="iitb/cw" class="list-group-item">Computer Workshop</a>
                <a href="moodle" class="list-group-item">Moodle</a>
                <!--                <a href="#" class="list-group-item">Link</a>-->
                <!--                <a href="#" class="list-group-item">Link</a>-->
                <!--                <a href="#" class="list-group-item">Link</a>-->
            </div>
        </div>

    </div><!--/row-->




<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/handlebars-v4.0.5.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/sammy-latest.min.js"></script>
<script type="text/javascript" src="js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="js/index.js"></script>

</body>
</html>