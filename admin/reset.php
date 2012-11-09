<?php

$how_many_days = 46;

require_once('../config.php');

$db->remove('campaigns',array());
$db->remove('users',array('first_name'=>array('$ne'=>'think')));
$db->remove('plays',array());
$db->remove('winners',array());

$now = new MongoDate();
$key = rand_char(16);
$hour = numberInRange(1,4,1);
$minute = numberInRange(1,59,1);
$second = numberInRange(1,59,1);
$today = new MongoDate(strtotime($hour[0].':'.$minute[0].':'.$second[0]));
echo date('M d Y h:i:s', $today->sec); 
echo "<br>". date('M d Y h:i:s', $now->sec);
$insertToday = $db->insert('campaigns',
	array(	'key' => $key,
		'date' => $now,
		'last_claim' => 0));

for($i = 1; $i < $how_many_days; $i++) {
	$key = rand_char(16);
	$hour = numberInRange(12,15,1);
	$minute = numberInRange(1,59,1);
	$second = numberInRange(1,59,1);
	$random = strtotime("+ ".$i." days ".$hour[0]." hours ".$minute[0]." minutes ".$second[0]." seconds");
	echo date('M d Y h:i:s e', $random).'<br />';
	$insert = $db->insert('campaigns',
		array(	'key' => $key,
			'date' => new MongoDate($random),
			'last_claim' => 0));
}

?>
