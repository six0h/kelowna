<?php

header("p3p: CP=\"ALL DSP COR PSAa PSDa OUR NOR ONL UNI COM NAV\"");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
header("Cache-Control: no-store, no-cache, must-revalidate"); 
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
require_once('../../config.php');
$status = 200;
$errors = array();
// MAKE SURE ALL REQUIRED INFORMATION IS PRESENT, IF NOT, THROW ERROR
if(!isset($_POST['id'])
|| !isset($_POST['email'])
|| !isset($_POST['first_name'])
|| !isset($_POST['last_name'])
|| !isset($_POST['salt'])) {
	$status = 501;
	$errors[] = "You didn't submit your entry from the app, are you trying to cheat?";
	$response = array('status' => $status,'errors'=>$errors);
	exit(0);
}

(isset($_POST['phone'])) ? $phone = $_POST['phone'] : $phone = '';
(isset($_POST['news']) && $_POST['news'] == 'on') ? $news = 1 : $news = 0;

// IF IT IS PRESENT, CONTINUE
$today = new MongoDate(strtotime('today'));
$now = new MongoDate();
$tomorrow = new MongoDate(strtotime('tomorrow'));

// CHECK HOW MANY PLAYS USER HAS HAD
$num_plays = $db->count('plays',array(
		'date'=>array(
			'$gte'=>$today,
			'$lt'=>$tomorrow),
		'fbid'=>$_POST['id']));

if($num_plays == 2) {
	$status = 203;
	$errors[] = 'User has already played twice';
	echo json_encode(array('status'=>$status,'errors'=>$errors));
	exit();
}

// RECORD PLAY
try {
	$db->insert('plays',array(
		'fbid'=>$_POST['id'],
		'email'=>$_POST['email'],
		'first_name'=>$_POST['first_name'],
		'last_name'=>$_POST['last_name'],
		'key'=>$_POST['salt'],
		'date'=>$now));
} catch (Exception $e) {
	$response = array(
		'status'=>500,
		'errors'=>array('Could not record play, please try again'));
	echo json_encode($response);
	exit();
}

$num_plays++;

// TODAY'S WINNING TIME
try {
	$todays_time = $db->select('campaigns',array('date'=>array('$gte'=>$today,'$lt'=>$tomorrow)));
} catch(Exception $e) {
	echo json_encode(array('status'=>500,'errors'=>$e->getMessage()));
	exit();
}

foreach($todays_time as $time) {

	$_id = $time['_id']; // CAMPAIGN ID
	$last_claim = $time['last_claim']; // LAST CLAIM OF WINNING KEY
	$key = $time['key']; // TODAY'S WINNING KEY
	$date = $time['date']; // TODAYS WINNING TIME

	// CHECK IF THERE'S BEEN A WINNER ALREADY
	if(isset($time['winner'])) {
		$winner = $time['winner'];
		$status = 201;
		$errors[] = 'Not a Winner, shucks';
	} else {
		
		// IF THERE HASN'T BEEN A WINNER
		// CHECK IF THE KEY THE USER PRESENTED IS THE SAME AS TODAY'S WINNING KEY
		if($_POST['salt'] == $key) $matched_key = 1;

		// IF THE USERS KEY IS TODAYS WINNING KEY
		if(isset($matched_key) && $matched_key == 1) {
			// ADD THE USER TO THE WINNERS COLLECTION
			try { 
				$db->insert('winners',array(
					'campaign_id' => $_id,
					'key'=>$key,
					'fbid'=>$_POST['id'],
					'win_time'=>$now,
					'campaign_date'=>$time['date']));
			} catch (Exception $e) {
				$status = 500;
				$errors[] = $e->getMessage();
				$response = array('status'=>$status,'errors'=>$errors);
				echo json_encode($response);
				exit();
			}

			try {
				$db->update('users',array('fbid'=>$_POST['id']),array('$inc'=>array('wins'=>1)));
			} catch (Exception $e) {
				$status = 204;
				$errors[] = $e->getMessage();
				$response = array('status'=>$status,'errors'=>$errors);
				echo json_encode($response);
				exit();

			}

			try {
				$db->update('campaigns',array('_id'=>$_id),array('$set'=>array('winner'=>$_POST['id'],'win_time'=>$now)));
			} catch (Exception $e) {
				$status = 201;
				$errors[] = $e->getMessage();
				$response = array('status'=>$status,'errors'=>$errors);
				echo json_encode($response);
				exit();
			}

			$status = 999;
			$errors[] = 'We have a winner!';
			$roll = 'win';

		} else {
			$status = 201;
			$errors[] = 'Not a winner';
			$roll = 'nowin';
		}

	}
}

if(!isset($roll)) $roll = '';

$response = array(
	'status' => (int) $status,
	'errors' => $errors,
	'id' => (int) $_POST['id'],
	'attempt' => $roll,
	'num_plays' => $num_plays
);

echo json_encode($response);

?>
