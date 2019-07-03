<?php 

/**
 * 
 */


class Database
{
	
	public function open_database_connection()
	{
		$connection = new PDO("mysql:host=".DB_SERVER.";dbname=".DB_NAME, DB_USERNAME, DB_PASSWORD);

		return $connection;
	}

	public function close_database_connection(&$connection)
	{
		$connection = null;
	}
}
