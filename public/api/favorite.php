<?php
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$connection = "mysql:host=localhost;port=3306;dbname=sigma_php_mysql";

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$method = $_SERVER['REQUEST_METHOD'];


try {
    $pdo = new PDO($connection, 'user1', 'User1_User1', $options);
    if ($method == 'GET') {
        $statement = $pdo->query("SELECT products.id, title, description, price, image, count_on_storage
                                           FROM favorites LEFT JOIN products ON favorites.product_id = products.id");
        $statement->execute();
        $data = $statement->fetchAll();
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    } elseif ($method == 'POST') {
        echo 'post';
        $request_body = file_get_contents('php://input');
        $data = json_decode($request_body, true);
        $id = $data['id'];
        $statement = $pdo->query("SELECT COUNT(*) AS count FROM favorites WHERE product_id = $id");
        $statement->execute();
        $data = $statement->fetchAll();
        if ($data[0]['count'] == 1) {
            $statement = $pdo->query("DELETE FROM favorites WHERE product_id = $id");
            $statement->execute();
        } else {
            $statement = $pdo->prepare("INSERT INTO favorites (product_id) VALUES (:id)");
            $statement->execute([
                ':id' => $id
            ]);
        }
    }
    $pdo = null;
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
