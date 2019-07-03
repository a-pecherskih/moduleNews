<?php 



class Category extends Database
{
	
	function get_all_categories()
	{
		$connection = $this->open_database_connection();
		$result = $connection->query('SELECT * FROM categories');

		$categoris = [];
		while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
			$categoris[] = $row;
		}
		$this->close_database_connection($connection);

		return $categoris;
	}
}
