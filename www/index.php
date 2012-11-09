<?php
require_once('../config.php');
require_once(CLASS_PATH . 'Mobile_Detect.php');
header("p3p: CP=\"ALL DSP COR PSAa PSDa OUR NOR ONL UNI COM NAV\"");

$detect = new Mobile_Detect();

if($detect->isMobile()) {

	header('Location: ' . BASE_URL . 'mobile.php');

}

if($detect->isTablet()) {

	header('Location: ' . BASE_URL . 'mobile.php');

}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Pass the Parcel!</title>

	<script type="text/javascript">
		var page_tab_url = '<?php echo PAGE_TAB; ?>';
		window.top.location = page_tab_url;
	</script>

</head>

<body>

</body>
</html>
