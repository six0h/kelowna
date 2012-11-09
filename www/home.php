<?php
require_once('../config.php');
header("p3p: CP=\"ALL DSP COR PSAa PSDa OUR NOR ONL UNI COM NAV\"");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
header("Cache-Control: no-store, no-cache, must-revalidate"); 
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
require_once( BASE_PATH . 'functions.php');
require_once( BASE_PATH . 'sdk/facebook-sdk/facebook.php');


if($detect->isMobile()) {

	header("Location: ". BASE_URL . "mobile.php");

}


if($detect->isTablet()) {

//	header("Location: ". BASE_URL . "mobile.php");

}

$banned = check_bans();
if($banned > 0) {
	?>
	<script type="text/javascript">
		alert('Sorry, you are not eligible to enter.');
	</script>
	<?php

	exit();
}

$date = date('U'); $time = date('U');

$creds = array( // FACEBOOK APP CREDS
    'appId' => APP_ID,
	'secret' => APP_SECRET,
	'cookie' => true
);

// INIT FACEBOOK
$facebook = new Facebook($creds);
$sr = $facebook->getSignedRequest(); // GET SIGNED REQUEST FROM FB

// FIND OUT IF USER LIKED PAGE
$liked = $sr['page']['liked'];


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" 
    xmlns:fb="https://www.facebook.com/2008/fbml">
<head>

	<title>YLW to LAX | Kelowna To LA for the first time ever!</title>
	<meta name="og:title" content="Love Every Second of Sydney Pass the Parcel app. Unwrap a layer to win!"/>
	<meta charset="utf-8" />

	<link rel="stylesheet" type="text/css" href="css/style.css?date=<?php echo $date; ?>" />
	<link rel="stylesheet" type="text/css" href="css/fonts.css" />
	<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css" />


</head>

<body>

<div id="fb-root"></div>

<div id="page-wrapper">

	<?php if($liked == 1) {
		require_once('pages.php'); 
	} else {
		require_once('like-gate.php');
	} ?>


</div>


<script src="js/html5shiv.js"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/jquery-form.js"></script>
<script src="js/jquery-validate.js"></script>
<script src="js/jquery-fancybox.js"></script>
<script src="js/jquery-countdown.js"></script>
<script src="js/modernizr.js"></script>
<script src="js/app.js"></script>
<script type="text/javascript">

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-25465482-1']);
	_gaq.push(['_setDomainName', 'ionflo.com']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

</script>

</body>
</html>

