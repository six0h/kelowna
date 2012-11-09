<?php

@header("Last-Modified: " . @date("D, d M Y H:i:s",$_GET['timestamp']));
@header("Content-Type: text/csv");
@header("Pragma: no-cache");
@header("Expires: 0");

$date = date('m-d-Y', $_GET['timestamp']/1000);

require_once('../config.php');

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

	header("Content-Disposition: attachment; filename=".DB_NAME."-winners-".$date.".csv");

}

$q1 = $db->select('winners', array('admin'=>array('$exists'=>false)));
$csvOutput = '';
foreach($q1 as $row) {
	$userdate = date('M d Y H:i:s a e', $row['campaign_date']->sec);
	$user = $db->select('users',array('fbid'=>$row['fbid']));
	foreach($user as $u) $name = $u['first_name']. " " .$u['last_name'];
	$csvOutput .= $row['campaign_id'] . ",";
	$csvOutput .= $row['key'] . ",";
	$csvOutput .= $row['fbid'] . ",";
	$csvOutput .= $row['name'] . ",";
	$csvOutput .= $row['phone'] . ",";
	$csvOutput .= $row['postal'] . ",";
	$csvOutput .= date('M d Y H:i:s e', $row['win_time']) . ",";
	$csvOutput .= $userdate . "\n";
}

print $csvOutput;

?>
