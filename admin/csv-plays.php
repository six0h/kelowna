<?php

@header("Last-Modified: " . @date("D, d M Y H:i:s",$_GET['timestamp']));
@header("Content-Type: text/csv");
@header("Pragma: no-cache");
@header("Expires: 0");

$date = date('m-d-Y', $_GET['timestamp']/1000);

require_once('../config.php');

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

	header("Content-Disposition: attachment; filename=".DB_NAME."-plays-".$date.".csv");

}

if(isset($_GET['dateStart'])) $dateStart = strtotime($_GET['dateStart']);
if(isset($_GET['dateEnd'])) $dateEnd = strtotime($_GET['dateEnd']);

$crit = array('$gte'=>new MongoDate($dateStart),'$lt'=> new MongoDate($dateEnd+86400));

$q1 = $db->select('plays', array('admin'=>array('$exists'=>false),'date'=>$crit));
$csvOutput = '';
foreach($q1 as $row) {
	$userdate = date('M d Y H:i:s a e', $row['date']->sec);
	$csvOutput .= $row['fbid'] . ",";
	$csvOutput .= $row['first_name'] . " " . $row['last_name'] . ",";
	$csvOutput .= $row['email'] . ",";
	$csvOutput .= $row['key']. ",";
	$csvOutput .= $userdate . "\n";
}

print $csvOutput;

?>
