<?php 



class Event extends Database
{
	private $_monthsList = array(
		"1"=>"января","2"=>"февраля","3"=>"марта",
		"4"=>"апреля","5"=>"мая", "6"=>"июня",
		"7"=>"июля","8"=>"августа","9"=>"сентября",
		"10"=>"октября","11"=>"ноября","12"=>"Декабря");
	
	function get_all_events($category_id = null)
	{
		$connection = $this->open_database_connection();

		if ($category_id) {
			$sql = "SELECT events.* FROM events JOIN categories_events ON events.id=categories_events.event_id WHERE categories_events.category_id=".$category_id;
		} else {
			$sql = 'SELECT * FROM events';
		}
		$result = $connection->query($sql);

		$events = [];
		while ($row = $result->fetch(PDO::FETCH_ASSOC)) {

			//формирование строки даты
			$month_start = date("n", strtotime($row['date_start']));
			$row['month_start'] = month_start;

			if($row['date_end']) {
				$month_end = date("n", strtotime($row['date_end']));
				$row['month_end'] = month_end;
				if ($month_start == $month_end) {
					$row['date'] = date("d", strtotime($row['date_start']))."-".date("Y", strtotime($row['date_end']))." ".$this->_monthsList[$month_start];
				} else {
					$row['date'] = date("d", strtotime($row['date_start']))." ".$this->_monthsList[$month_start]." - ".date("d", strtotime($row['date_end']))." ".$this->_monthsList[$month_end];
				}
			} else {
				$row['date'] = date("d", strtotime($row['date_start']))." ".$this->_monthsList[$month_start];
			}

			//формирование строки время
			if($row['time_start']) {
				$row['time'] = date("H:i", strtotime($row['time_start']));
			}

			$sql_category = "SELECT category_id, icon FROM  categories JOIN categories_events ON categories_events.category_id = categories.id WHERE categories_events.event_id = ".$row['id'];
			$result_categories = $connection->query($sql_category);
			while ($row_categories = $result_categories->fetch(PDO::FETCH_ASSOC)) {
				$row['categories'][] = $row_categories;
			}			

			$events[] = $row;
		}
		$this->close_database_connection($connection);

		return $events;
	}
}
