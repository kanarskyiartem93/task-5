<?php
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
$connection = "mysql:host=localhost;port=3306;dbname=sigma_php_mysql";

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET'){
    try {
        $pdo = new PDO($connection, 'user1', 'User1_User1', $options);
        $statement = $pdo->query("SELECT * FROM products");
        $statement->execute();
        $data = $statement->fetchAll();
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
        $pdo = null;
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }
}

