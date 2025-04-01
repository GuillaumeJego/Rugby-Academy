<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Inclure la connexion à la base de données
include "db_connect.php";

// Récupérer la méthode HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Récupérer les données envoyées (pour POST, PUT, DELETE)
$input = json_decode(file_get_contents("php://input"), true);

try {
    switch ($method) {
        // Récupérer tous les tests (GET)
        case 'GET':
            $stmt = $pdo->query("SELECT * FROM tests");
            $tests = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($tests);
            break;

        // Ajouter un test (POST)
        case 'POST':
            if (!isset($input['name']) || !isset($input['description'])) {
                http_response_code(400);
                echo json_encode(["error" => "Les champs 'name' et 'description' sont requis"]);
                exit();
            }
            $stmt = $pdo->prepare("INSERT INTO tests (name, description) VALUES (?, ?)");
            $stmt->execute([$input['name'], $input['description']]);
            http_response_code(201);
            echo json_encode(["message" => "Test ajouté avec succès"]);
            break;

        // Modifier un test (PUT)
        case 'PUT':
            if (!isset($input['id']) || !isset($input['name']) || !isset($input['description'])) {
                http_response_code(400);
                echo json_encode(["error" => "Les champs 'id', 'name' et 'description' sont requis"]);
                exit();
            }
            $stmt = $pdo->prepare("SELECT * FROM tests WHERE id = ?");
            $stmt->execute([$input['id']]);
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(["error" => "Test non trouvé"]);
                exit();
            }
            $stmt = $pdo->prepare("UPDATE tests SET name = ?, description = ? WHERE id = ?");
            $stmt->execute([$input['name'], $input['description'], $input['id']]);
            echo json_encode(["message" => "Test mis à jour avec succès"]);
            break;

        // Supprimer un test (DELETE)
        case 'DELETE':
            if (!isset($input['id'])) {
                http_response_code(400);
                echo json_encode(["error" => "L'ID est requis"]);
                exit();
            }
            $stmt = $pdo->prepare("SELECT * FROM tests WHERE id = ?");
            $stmt->execute([$input['id']]);
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(["error" => "Test non trouvé"]);
                exit();
            }
            $stmt = $pdo->prepare("DELETE FROM tests WHERE id = ?");
            $stmt->execute([$input['id']]);
            echo json_encode(["message" => "Test supprimé avec succès"]);
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