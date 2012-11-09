<?php

require_once('../../config.php');

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

foreach($_POST as $key=>$value) $$key = $value;
$today = new MongoDate(strtotime('today'));
$tomorrow = new MongoDate(strtotime('tomorrow'));
$now = new MongoDate();

try {
	$result = $db->select('plays',
		array(
			'date'=>array(
				'$gte'=>$today,
				'$lt'=>$tomorrow)),
		array(
			'sort'=>array(
				'date'=>1),
			'limit'=>1));
} catch (Exception $e) {
	$status = 500;
	$errors[] = "Could not check for today's plays";
}

if($status == 200) {
	foreach($result as $res) {
		try {
			$db->update('plays',array(
				'_id' => $res['_id']),
				array('$set'=>array(
					'shared'=>1)));
		} catch (Exception $e) {
			$status = 500;
			$errors[] = "Could not record share in database";
		}
	}
}

$response['status'] = $status;
$response['errors'] = $errors;

echo json_encode($response);

?>