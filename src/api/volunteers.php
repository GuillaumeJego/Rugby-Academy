<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Inclure la connexion à la base de données
include "db_connect.php";

// Récupérer la méthode HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Récupérer les données envoyées (pour POST)
$input = json_decode(file_get_contents("php://input"), true);

try {
    switch ($method) {
        // Récupérer tous les bénévoles (GET)
        case 'GET':
            $stmt = $pdo->query("SELECT id, name, stand, time_slot FROM volunteers");
            $volunteers = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = array_map(function($v) {
                return [
                    "id" => (int)$v["id"],
                    "name" => $v["name"],
                    "stand" => $v["stand"],
                    "timeSlots" => [$v["time_slot"]],
                    "groupe" => $v["stand"],
                    "explanation" => ""
                ];
            }, $volunteers);
            echo json_encode($result);
            break;

        // Ajouter un bénévole (POST)
        case 'POST':
            if (!isset($input['name']) || !isset($input['stand']) || !isset($input['time_slot'])) {
                http_response_code(400);
                echo json_encode(["error" => "Les champs 'name', 'stand' et 'time_slot' sont requis"]);
                exit();
            }
            $stmt = $pdo->prepare("INSERT INTO volunteers (name, stand, time_slot) VALUES (?, ?, ?)");
            $stmt->execute([$input['name'], $input['stand'], $input['time_slot']]);
            http_response_code(201);
            echo json_encode(["message" => "Bénévole ajouté avec succès"]);
            break;

        default:
            http_response_code(405);
            echo json_encode(["error" => "Méthode non autorisée"]);
            break;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Erreur : " . $e->getMessage()]);
}
?>