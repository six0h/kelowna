<?php

require_once('../config.php');

$items = $db->select('campaigns',array(),array('sort'=>array('_id'=>1)));


?>

<table class="modal">
	<thead>
		<tr>
			<th>ID</th>
			<th>Date/Time</th>
			<th>Key</th>
			<th>Last Claimed</th>
			<th>Winner</th>
			<th>Win Time</th>
			<th>Caption</th>
			<th>Prize Pic</th>
			<th>Prize</th>
		</tr>
	</thead>

	<tbody>
	<?php 
	foreach($items as $item) {
		$_id = $item['_id'];
		$date = $item['date'];
		$key = $item['key'];
		(is_object($item['last_claim'])) ? $last_claim = date('M d Y H:i:s e', $item['last_claim']->sec) : $last_claim = '';
		(isset($item['win_time']) && is_object($item['win_time'])) ? $win_time = date('M d Y H:i:s e', $item['win_time']->sec) : $win_time = '';
		(isset($item['winner'])) ? $winner = $item['winner'] : $winner = '';
		(isset($item['caption'])) ? $caption = $item['caption'] : $caption = '';
		(isset($item['prize'])) ? $prize = $item['prize'] : $prize = '';
	?>
		<tr>
			<td><?=$_id?></td>
			<td><?=date('M d Y H:i:s A e', $date->sec);?></td>
			<td><?=$key?></td>
			<td><?=$last_claim?></td>
			<td><? if(isset($winner)) echo $winner;?></td>
			<td><? if(isset($win_time)) echo $win_time;?></td>
			<td><span id="<?=$_id?>" class="edit"><? if(isset($caption)) echo $caption;?></span></td>
			<td>
				<? if($prize != '') echo "<img src='".BASE_URL."uploads/".$prize."'/>";?>
			</td>
			<td>
				<form enctype="multipart/form-data" class="upload_form">
					<input type="file" name="value"/>
					<input type="submit" value="Upload" />
					<input type="hidden" name="id" value="<?=$_id;?>"/>
				</form>
			</td>
		</tr>
	<?php } ?>
	</tbody>
</table>
