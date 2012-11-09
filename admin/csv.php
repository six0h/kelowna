<?php

@header("Last-Modified: " . @date("D, d M Y H:i:s",$_GET['timestamp']));
@header("Content-Type: text/csv");
@header("Pragma: no-cache");
@header("Expires: 0");

$date = date('m-d-Y', $_GET['timestamp']/1000);

require_once('../config.php');

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

	header("Content-Disposition: attachment; filename=".DB_NAME."-users-".$date.".csv");

}

$q1 = $db->select('users', array('admin'=>array('$exists'=>false)));
$csvOutput = '';
foreach($q1 as $row) {
	(($row['news']) == 1) ? $news = 'Yes' : $news = 'No';
	$userdate = date('M d Y H:i:s a e', $row['date']->sec);
	$csvOutput .= $row['fbid'] . ",";
	$csvOutput .= $row['first_name'] . ",";
	$csvOutput .= $row['last_name'] . ",";
	$csvOutput .= $row['email'] . ",";
	$csvOutput .= $row['gender']. ",";
	$csvOutput .= $news. ",";
	$csvOutput .= str_replace(',','|', $row['location']) . ",";
	$csvOutput .= $userdate . "\n";
}

print $csvOutput;

?>
