<?php

require_once('../../config.php');
header("p3p: CP=\"ALL DSP COR PSAa PSDa OUR NOR ONL UNI COM NAV\"");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
header("Cache-Control: no-store, no-cache, must-revalidate"); 
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$status = 200;
$errors = array();
$response = array();

// MAKE SURE WE HAVE ALL REQUIRED INFO
if(!isset($_POST['email']) 
|| !isset($_POST['first_name'])
|| !isset($_POST['last_name']) 
|| !isset($_POST['id'])) {

	$response = array(
		'errors' => "You must provide your email address, first name, and last name to continue",
		'status' => 501);
	echo json_encode($response);
	exit();

}

// ASSIGN EACH POST TO ITS OWN VARIABLE
foreach($_POST as $k=>$v) $$k = $v;

unset($salt);

// EXCHANGE OR RENEW TOKEN
$FBEndpoint = 'https://graph.facebook.com/oauth/access_token?client_id='. APP_ID .'&client_secret='. APP_SECRET .'&grant_type=fb_exchange_token&fb_exchange_token='.$_POST['access_token'];
$token = file_get_contents($FBEndpoint);
parse_str($token,$output);

// CHECK IF USER IS IN DATABASE
$crit = array('fbid' => $id);
$exists = $db->count('users', $crit);

// ASSIGN LOCATION A VARIABLE
if(isset($location['name'])) {
	$loc = $location['name'];
} else {
	$loc = '';
}

// GET EXPIRY DATE ON LONG-LIVED ACCESS TOKEN
$expires = new MongoDate(date('U') + $output['expires']);

// IF USER IS NOT ALREADY IN DATABASE
if($exists == 0) {
	$data = array(
		'fbid'=>$id,
		'first_name'=>$first_name,
		'last_name'=>$last_name,
		'email'=>$email,
		'gender'=>$gender,
		'location'=>$loc,
		'access_token'=>$output['access_token'],
		'date'=>new MongoDate(),
		'expires'=>$expires);
	try {
		// INSERT INTO DATABASE
		$db->insert('users',$data);
	} catch (Exception $e) {
		$errors[] = $e->getMessage();
		$status = 500;
	}
} else { // IF USER IS ALREADY IN DATABASE
	
	// UPDATE USERS LOCAL PROFILE
	$updates = array(
		'first_name' => $first_name,
		'last_name' => $last_name,
		'email' => $email,
		'gender' => $gender,
		'location' => $loc,
		'access_token' => $output['access_token'],
		'expires' => $expires);

	try {

		$update_user = $db->update('users',array('fbid'=>$id),array('$set'=>$updates));

	} catch (Exception $e) {
		$errors[] = $e->getMessage();
		$status = 500;
		$response = array('errors'=>$errors,'status'=>$status);
		echo json_encode($response);
		exit();
	}
}

$today = new MongoDate(strtotime('today')); // TIMESTAMP FOR BEGINNING OF TODAY
$tomorrow = new MongoDate(strtotime('tomorrow')); // TIMESTAMP FOR BEGINNING OF TOMORROW

// CHECK IF USER HAS PLAYED TODAY
$play_today = $db->count('plays', array(
	'fbid' => $id,
	'date' => array('$lt'=>$tomorrow,'$gte'=>$today)
));

// IF THEY HAVE NOT PLAYED, PROCEED AS NORMAL
if($play_today == 0) {
	// continue as normal
} elseif ($play_today == 1) { // IF THEY PLAYED ONCE

	// CHECK IF THEY'VE SHARED WITH FRIENDS
	$count_plays = array(
		'fbid' => $id,
		'date' => array('$lt'=>$tomorrow,'$gte'=>$today),
		'shared' => 1);
	$plays_shared = $db->count('plays', $count_plays);
	
	// IF THEY HAVE NOT SHARED WITH FRIENDS
	if($plays_shared == 0) {
		$response = array(
			'status' => 201,
			'errors' => array('User played today, but did not share'));
	} elseif ($plays_shared == 1) { // IF THEY HAVE SHARED WITH FRIENDS
		$status = 202;
		$errors[] = $first_name + ' played once today, and shared with a friend, they get to play again.';
	}

} elseif ($play_today == 2) { // IF THEY'VE ALREADY PLAYED TWICE TODAY
		
	$status = 203;
	$errors[] = $first_name + ' played twice today';
} 

// CHECK IF THE TIME OF DAY HAS PASSED
$today = new MongoDate(strtotime('today'));
$now = new MongoDate();
$tomorrow = new MongoDate(strtotime('tomorrow'));

try {
	$time_check = $db->select('campaigns', array('date' => array('$gte' => $today,'$lt'=>$tomorrow)));
} catch(Exception $e) {
	echo json_encode(array('errors'=>'Sorry, there is no scheduled contest today','status'=>501));
	exit();
}

foreach($time_check as $time) {
	$todays_time = $time['date']->sec;

	if(isset($time['last_claim']) && is_object($time['last_claim'])) {
		$last_claim = $time['last_claim']->sec;
	} else {
		$last_claim = 0;
	} 

	$todays_key = $time['key'];
	if(isset($time['winner'])) $winner = $time['winner'];
	$_id = $time['_id'];

}

if($todays_time < $now->sec) {
	$claim_expiry = new MongoDate(strtotime('- 5 minutes'));
	if($last_claim < $claim_expiry->sec) {
		if(!isset($winner)) {
			$salt = $todays_key;
			try {
				$db->update('campaigns',array('_id'=>$_id),array('$set'=>array('last_claim'=>new MongoDate())));
			} catch (Exception $e) {
				$status = 500;
				$errors[] = 'Could not update last_claim time, randomizing salt';
				$salt = rand_char(16);
			}
		} 
	}
}

if(!isset($salt)) $salt = rand_char(16);

$response['errors'] = $errors;
$response['status'] = $status;
$response['salt'] = $salt;
$response['access_token'] = $output['access_token'];

echo json_encode($response);

?>
