<?php

require_once('mongo.class.php');

class Campaign {
	
	protected 	$_id,
				$key,
				$winner,
				$last_claim,
				$date,
				$db;

	private function __constructor() {
		$this->db = new Db();
	}

	public function getCampaignByDate($start_date,$end_date) {
		global $db;
		$results = $db->select('campaigns',array('date'=>array('$gte'=>$start_date,'$lt'=>$end_date)));
		return $results;
	}

	private function instantiate($record) {
		$object = new self;
		foreach($record as $key=>$value) {
			$object->$key = $value;
		}
		return $object;
	}

	public function getId() {
		return $this->_id;
	}

	public function setId($_id) {
		$this->_id = $_id;
	}

	public function getKey() {
		return $this->key;
	}

	public function setKey($key) {
		$this->key = $key;
	}

	public function getWinner() {
		return $this->winner;
	}

	public function setWinner($winner) {
		$this->winner = $winner;
	}

	public function getLastClaim() {
		return $this->last_claim;
	}

	public function setLastClaim($last_claim) {
		$this->last_claim = $last_claim;
	}

	public function getDate() {
		return $this->date;
	}

	public function setDate($date) {
		$this->date = $date;
	}

}

?>