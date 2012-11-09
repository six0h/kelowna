<?php

require_once('../../config.php');

$status = 200;
$errors = array();
$response = array();

if(isset($_POST['id']) && $_POST['id'] != ''
&& isset($_POST['value']) && $_POST['value'] != '') {

	try {
		$db->update('campaigns',array('_id'=>new MongoId($_POST['id'])),array('$set'=>array('caption'=>$_POST['value'])));
	} catch(Exception $e) {
		$status = 500;
		$errors[] = $e->getMessage();
	}

}

$response['status'] = $status;
$response['errors'] = $errors;

echo $_POST['value'];

?>
