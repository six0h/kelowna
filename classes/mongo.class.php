<?php

class Db {

	private		$m,
				$db_name = DB_NAME,
				$last_id;

	public function __construct() {

        $uri = "mongodb://" . DB_USER . ":" . DB_PASS . "@localhost/" . DB_NAME;
		$this->m = new Mongo($uri);
		$this->db = $this->m->DB_NAME;

	}

	public static function getInstance() {
		if(is_null(self::$instance)) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function select($collection,$crit = array(),$options = array()) {
		try {
			$record = $this->db->$collection->find($crit);
		} catch (Exception $e) {
			throw Exception("Could not select from Database");
		}
		if(isset($options['sort'])) {
			$record->sort($options['sort']);
		} 
		if (isset($options['limit'])) {
			$record->limit($options['limit']);
		}
		return $record;
	}

	public function selectOne($collection,$crit = array(),$fields = array(), $options = array()) {
		$record = $this->db->$collection->findOne($crit,$fields);
		if(isset($options['sort'])) $record->sort($options['sort']);
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
