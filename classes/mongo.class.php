<?php

class Db {

	private		$m = '',
				$db_name = DB_NAME,
				$last_id;

	public function __construct() {

        $uri = "mongodb://" . DB_USER . ":" . DB_PASS . "@localhost/" . DB_NAME; 
		$this->m = new Mongo($uri);	
		$m = $this->m;
		$db_name = $this->db_name;
		$this->db = $m->$db_name;

	}

	public function select($collection,$crit = array(),$options = array()) {
		$record = $this->db->$collection->find($crit);
		if(isset($options['sort'])) {
			$record->sort($options['sort']);
		} 
		if (isset($options['limit'])) {
			$record->limit($options['limit']);
		}
		return $record;
	}

	public function count($collection,$crit) {
		$count = $this->db->$collection->count($crit);
		return $count;
	}

	public function insert($collection,$data) {
		$this->db->$collection->insert($data);
	}

	public function update($collection,$crit,$data,$options = array()) {
		$this->db->$collection->update($crit,$data,$options);
	}

	public function remove($collection,Array $crit) {
		$this->db->$collection->remove($crit);
	}

	public function lastId() {
		return $this->lastId;
	}

}

$db = new Db(); 

?>
