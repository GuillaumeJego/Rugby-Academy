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

// Simuler un rôle (à remplacer par votre logique d'authentification plus tard)
// $isAdmin = false; // Par défaut, pas admin
$isAdmin = (isset($_SERVER['HTTP_AUTHORIZATION']) && checkRole($_SERVER['HTTP_AUTHORIZATION']) === 'ADMIN');
// Exemple futur : $isAdmin = (isset($_SERVER['HTTP_AUTHORIZATION']) && checkRole($_SERVER['HTTP_AUTHORIZATION']) === 'ADMIN');

try {
    switch ($method) {
        // Récupérer tous les bénévoles (GET)
        case 'GET':
            $stmt = $pdo->query("SELECT id, name, last_name, stand, time_slot, phone_number FROM volunteers");
            $volunteers = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = array_map(function($v) use ($isAdmin) {
                $volunteer = [
                    "id" => (int)$v["id"],
                    "name" => $v["name"],
                    "lastName" => $v["last_name"],
                    "stand" => $v["stand"],
                    "timeSlots" => [$v["time_slot"]],
                    "groupe" => $v["stand"],
                    "explanation" => ""
                ];
                // Ajouter phone_number uniquement si l'utilisateur est admin
                if ($isAdmin) {
                    $volunteer["phoneNumber"] = $v["phone_number"];
                }
                return $volunteer;
            }, $volunteers);
            echo json_encode($result);
            break;

        // Ajouter un bénévole (POST)
        case 'POST':
            if (!isset($input['phone_number'])) {
                $input['phone_number'] = 'NO PHONE';
            }
            if (!isset($input['name']) || !isset($input['last_name']) || !isset($input['phone_number']) || !isset($input['stand']) || !isset($input['time_slot'])) {
                http_response_code(400);
                echo json_encode(["error" => "Les champs 'name', 'last_name', 'phone_number', 'stand' et 'time_slot' sont requis"]);
                exit();
            }
            $stmt = $pdo->prepare("INSERT INTO volunteers (name, last_name, phone_number, stand, time_slot) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$input['name'], $input['last_name'], $input['phone_number'], $input['stand'], $input['time_slot']]);
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