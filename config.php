<?php

// DONT FORGET TO EDIT JS CONFIG VARIABLES

$site['name'] = 'Kelowna to LA';

$http = 'http';
if(isset($_SERVER['HTTPS']) == 'on') $http .= 's';
$pageUrl = $http . '://' . $_SERVER['SERVER_NAME'] . '/';

define('BASE_URL', $pageUrl . 'kelowna/www/');
define('BASE_PATH', '/var/www/html/clients/kelowna/');
define('CLASS_PATH', BASE_PATH . 'classes/');
define('SITE_PATH', BASE_PATH . 'www/');
define('UPLOAD_PATH', SITE_PATH . 'uploads/');

define('DB_NAME', 'kelowna');
define('DB_HOST', 'localhost');
define('DB_USER', 'kelowna');
define('DB_PASS', 'letmein!');

define('APP_ID', '173820112759454');
define('APP_SECRET', 'aadfa247e4c60d43b3e66e2ca1586521');

define('PAGE_TAB', 'http://www.facebook.com/ChillspaceTesting?sk=app_173820112759454');

require_once(BASE_PATH . 'common.php');

?>
