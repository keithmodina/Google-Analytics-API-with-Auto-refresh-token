<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0" shrink-to-fit="no">
	<link rel="stylesheet" type="text/css" href="site.css">
	

	<?php include ('ga_script.php');   ?>
	
	
	
</head>	
	
<body>
		
		<div id="box-left">
	    		<div id="scr">
				  <p id="content"></p>
				</div>
		</div>
		<!-- <button id="nxt">Next Page</button> -->
		<div id="box-right">			          
			
		</div>
					
	
	<script type="text/javascript">
		$(document).ready(function(){
			$("#scr, #content").css("height", window.innerHeight * 2);
				$("#nxt").click(function(){
			    WebScroll.loopFrames();
		   });
		});		
	</script>


</body>
</html>


