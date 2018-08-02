<?php
session_start();
if(!isset($_SESSION['fac_username'])){
    header("location:http://localhost/Intranet/php/facultylogin.html");
}
?><!DOCTYPE html>
<html>
<head>
    <title>Admin Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/uploadfile.css">
    <link rel="stylesheet" href="../css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="../css/font-awesome.min.css">


    <!-- styles -->
    <link href="../css/facdashboard.css" rel="stylesheet">

</head>
<body>
<div class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="goback"><a href="../"><i class="fa fa-left"></i>Return back to Intranet</a></div>
            </div>
            <div class="col-md-5">
                <div class="logo">
                    <h1><a href="index.html">Faculty Dashboard</a></h1>
                </div>
            </div>
            <div class="col-md-2">
                <div class="logo">
                    <h1><a href="fac_logout.php">Logout</a></h1>
                </div>
            </div>
             <!--          <div class="col-md-5">
            <!---->
                       <!-- </div>
                        <div class="col-md-2">
                            <div class="navbar navbar-inverse" role="banner">
                                <ul class="navbar-nav">
                                    <li class="nav-item">Logout</li>
                                </ul>
                            </div>
                        </div>-->
        </div>

    </div>

</div>


<div class="page-content">
    <div class="row">
        <div class="col-md-2">
            <div class="sidebar content-box" style="display: block;">
                <ul class="nav">
                    <!-- Main menu -->
                    <li class="current navelement" id="navhome"><a href="#"">Home</a></li>
                    <li class="navelement" id="navprofile"><a href="#Profile"">Profile</a></li>
                    <li class="navelement" id="navsubj"><a href="#Subjects">Subjects</a></li>
                    <li class="navelement" id="navnotice"><a href="#Notice">Notice</a></li>
                    <li class="navelement" id="navevents"><a href="#Event">Events</a></li>
                    <!-- <li><a href="tables.html"><i class="glyphicon glyphicon-list"></i> </a></li> -->

                    <!-- <li class="submenu">
                         <a href="#">
                            <i class="glyphicon glyphicon-list"></i> Pages
                            <span class="caret pull-right"></span>
                         </a>

                         <ul>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signup.html">Signup</a></li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>

    
        <div class="col-md-10" id="facdashboard-main">
            

        </div>
    </div>
</div>


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/sammy-latest.min.js"></script>
<script type="text/javascript" src="../js/handlebars-v4.0.5.js"></script>
<script src="../js/jquery.uploadfile.min.js"></script>
<script src="../js/bootstrap-datepicker.js"></script>
<script src="../js/facdashboard.js"></script>
</body>
</html>