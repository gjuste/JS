<?php
$login = 'root';
$pass = 'Rafale.16';
$db = 'mysql:host=127.0.0.1;dbname=js_tp3';
try {
	$pdo = new PDO($db, $login, $pass);
} catch(PDOExeption $e) {
	die();
}
?>