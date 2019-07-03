<?php 

/**
 * 
 */
require_once 'module/models/Category.php';
require_once 'module/models/Event.php';

class MainController
{
	
	function index($category_id = null)
	{
		$category = new Category();
		$categories = $category->get_all_categories();
		
		$event = new Event();
		$events = $event->get_all_events($category_id);

		
		require 'promotions.php';
	}
}
