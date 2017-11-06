	
	

	<script>
	  (function(w,d,s,g,js,fs){
	    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
	    js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
	    js.src='https://apis.google.com/js/platform.js';
	    fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
	  }(window,document,'script'));

	</script>
	
	<script src="build/view-selector2.js"></script>
	<script src="build/date-range-selector.js"></script>
	<script src="build/active-users.js"></script>
	<script src="build/active-users2.js"></script>
	<script src="build/pagenotfound.js"></script>
	<script src="build/psst.js"></script>
	<script src="build/pagenotfound2.js"></script>
	<script src="build/psst-nf.js"></script>
	<script src="build/TopPages.js"></script>  
	<script src="build/top-psst.js"></script> 
	<script  src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script type="text/javascript" src="scrollScripy.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="google-php-api/src/vendor/composer/composer.json"></script>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,700,300' rel='stylesheet' type='text/css'>
	 <script src="http://isotope.metafizzy.co/jquery.isotope.min.js"></script>
	 <script>
	 	

	$(document).ready(function () {
		$("#scr, #content, #box-right").height(window.innerHeight);
		var bdwidth = $("#box-left").width();
		$("#content").width((bdwidth / 120)*250);
	    $(".tileContent").isotope({
	        itemSelector: ".tile,.tile2,.tile3,.tile4, .tile-small, .tile-small2, .tile5, .tile-2",
	        masonry:{
	        	layoutMode: "fitRows",
	       		animationEngine: "best-available",

	        	animationOptions: {
	            duration: 500,
	            easing: "linear",
	            queue: false
	        }
	        }
	        
	    });
});
    $(".tileContent").show();

    $(window).resize(function(){
    	var changeHeight = window.innerHeight
    	$('#scr, #content, #box-right').height(changeHeight);
    });
	 </script>
