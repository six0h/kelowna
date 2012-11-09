<?php

require_once('../config.php');

(isset($_GET['dateStart'])) ? $dateStart = date('M d Y', strtotime($_GET['dateStart'])) : $dateStart = '';
(isset($_GET['dateEnd'])) ? $dateEnd = date('M d Y', strtotime($_GET['dateEnd'])) + 86400 : $dateEnd = '';

if(!empty($dateStart) && !empty($dateEnd)) {
	$crit = array('date'=>array('$gte'=>new MongoDate($dateStart),'$lt'=>new MongoDate($dateEnd)));
} else {
	$crit = array();
}

$items = $db->select('plays',$crit,array('sort'=>array('date'=>1)));
$count = $db->count('plays',array());

(!empty($dateEnd)) ? $dateEnd = (int) $dateEnd - 86400 : $dateEnd = '';
?>

<form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>?p=plays">Start Date <input type="text" id="dateStart" name="dateStart" value="<?php echo $dateStart; ?>"/> End Date <input type="text" id="dateEnd" name="dateEnd" value="<?php echo $dateEnd; ?>" /><input type="submit" value="Get Range" id="submit"/><input type="hidden" id="p" name="p" value="plays"></form>
<p>Total Plays: <?php echo $count; ?> ( <a href="csv-plays.php" class="exportLink">Export to CSV</a> )</p>
<table class="modal">
	<thead>
		<tr>
			<th>FBID</th>
			<th>Name</th>
			<th>Email</th>
			<th>Keys</th>
			<th>Date</th>
		</tr>
	</thead>

	<tbody>
	<?php 
	foreach($items as $item) {
		if(isset($item['fbid'])) $fbid = $item['fbid'];
		if(isset($item['first_name']) && isset($item['last_name'])) {
			$first_name = $item['first_name'];
			$last_name = $item['last_name'];
			$name = $first_name." ".$last_name;
		}
		if(isset($item['email'])) $email = $item['email'];
		if(isset($item['key'])) $key = $item['key'];
		if(isset($item['date'])) $date = date('M d Y H:i:s e', $item['date']->sec);
	?>
		<tr>
			<td><?php echo $fbid;?></td>	
			<td><?php echo $name;?></td>	
			<td><?php echo $email;?></td>	
			<td><?php echo $key;?></td>	
			<td><?php echo $date;?></td>	
		</tr>
	<?php } ?>
	</tbody>
</table>
