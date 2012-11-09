<?php

require_once('../../config.php');

$today = new MongoDate(strtotime('today'));
$tomorrow = new MongoDate(strtotime('tomorrow'));
$now = new MongoDate();

$crit = array('date'=>array(
		'$gte'=>$today,
		'$lt'=>$tomorrow
	));

$update = array(
	'$set'=>array(
		'last_claim'=>0),
	'$unset'=>array(
		'winner'=>1));

try {
	$db->update('campaigns',array(),$update,array('multiple'=>true));
} catch (Exception $e) {
	echo "<br />".$e->getMessage();
}

try {
	$db->remove('plays',array());
} catch (Exception $e) {
	echo "<br />".$e->getMessage();
}

try {
	$db->remove('winners',array());
} catch (Exception $e) {
	echo "<br />".$e->getMessage();
}

echo json_encode(array('status'=>200));
?>
