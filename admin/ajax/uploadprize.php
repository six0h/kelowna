<?php

require_once('../../config.php');

$status = 200;
$errors = array();
$response = array();

if(isset($_POST['id']) && $_POST['id'] != ''
&& isset($_FILES['value']) && $_FILES['value'] != '') {

	$allowed = array('gif','jpg','png');
	$filename = $_FILES['value']['name'];
	$ext = pathinfo($filename, PATHINFO_EXTENSION);
	if(!in_array($ext,$allowed)) {
		$status = 501;
		$errors[] = 'This filetype is not allowed';
		echo json_encode(array('status'=>$status,'errors'=>$errors));
		exit();
	}

	$move = move_uploaded_file($_FILES['value']['tmp_name'],UPLOAD_PATH . $_POST['id'] . '.' . $ext);
	if(!$move) {
		$status=500;
		$errors="Could not upload your image, try again in a bit.";
		echo json_encode(array('status'=>$status,'errors'=>$errors));
	}

	try {
		$db->update('campaigns',array('_id'=>new MongoId($_POST['id'])),array('$set'=>array('prize'=>$_POST['id'] . '.' . $ext)));
	} catch(Exception $e) {
		$status = 500;
		$errors[] = $e->getMessage();
	}

}

$response['status'] = $status;
$response['errors'] = $errors;
$response['file'] = $_POST['id'].'.'.$ext;

echo json_encode($response);

?>
