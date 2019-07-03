<?php 

// index.php

// load and initialize any global libraries
require_once 'config.php';
require_once 'module/models/Database.php';

// route the request internally
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ('/' === $uri) {

	require_once 'module/controllers/MainController.php';

	$main = new MainController();
	
	if ($_GET['cat']) {
		$main->index($_GET['cat']);
	} else {
		$main->index();
	}

} else {
	header('HTTP/1.1 404 Not Found');
	echo '<html><body><h1>Page Not Found</h1></body></html>';
}

?>