<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" shrink-to-fit="no">
	<title>Dashboard Monitoring</title>
	<link rel="stylesheet" type="text/css" href="site.css">
	
	<?php include ('ga_script.php');   ?>

<script>
	// $(window).load(function() {
 //        $(".cover").fadeOut("slow");
 //    });
</script>
</head>	
<style type="text/css" media="screen">
.cover{
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 9999;
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: 50% !important;
}	
</style>

<body>
<div class="cover"></div>
	<div id="box-left">
		<div class="counter" id="counter"></div>
		<div id="scr">
			<p id="content"></p>
		</div>
	</div>
	
	<div id="box-right"></div>
	<div id="mobile-box">
		<div id="scr2">
			<p id="content2"></p>
		</div>
	</div>
</body>
</html>

