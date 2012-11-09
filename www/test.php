<?php

require_once('../config.php');

$today = new MongoDate(strtotime('today'));
$tomorrow = new MongoDate(strtotime('tomorrow'));

$camp = $db->count('campaigns',array('date'=>array('$gte'=>$today,'$lt'=>$tomorrow)));

echo $camp;

?>


