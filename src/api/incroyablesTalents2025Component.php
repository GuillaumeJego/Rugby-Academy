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
$isAdmin = (isset($_SERVER['HTTP_AUTHORIZATION']) && checkRole($_SERVER['HTTP_AUTHORIZATION']) === 'ADMIN');

try {
    switch ($method) {
        // Récupérer toutes les inscriptions pour Incroyable Talent (GET)
        case 'GET':
            $stmt = $pdo->query("SELECT id, category, description, needs, contact_name, contact_phone FROM incroyable_talent");
            $talents = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $result = array_map(function($t) use ($isAdmin) {
                $talent = [
                    "id" => (int)$t["id"],
                    "category" => $t["category"],
                    "description" => $t["description"],
                    "needs" => $t["needs"],
                    "contactName" => $t["contact_name"],
                    "groupe" => $t["category"], // Pour compatibilité avec le frontend existant
                    "explanation" => $t["description"] // Pour compatibilité
                ];
                // Ajouter contact_phone uniquement si l'utilisateur est admin
                if ($isAdmin) {
                    $talent["contactPhone"] = $t["contact_phone"];
                }
                return $talent;
            }, $talents);
            echo json_encode($result);
            break;

        // Ajouter une inscription pour Incroyable Talent (POST)
        case 'POST':
            if (!isset($input['contact_phone'])) {
                $input['contact_phone'] = 'NO PHONE';
            }
            if (!isset($input['category']) || !isset($input['description']) || !isset($input['needs']) || !isset($input['contact_name']) || !isset($input['contact_phone'])) {
                http_response_code(400);
                echo json_encode(["error" => "Les champs 'category', 'description', 'needs', 'contact_name' et 'contact_phone' sont requis"]);
                exit();
            }
            $stmt = $pdo->prepare("INSERT INTO incroyable_talent (category, description, needs, contact_name, contact_phone) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$input['category'], $input['description'], $input['needs'], $input['contact_name'], $input['contact_phone']]);
            http_response_code(201);
            echo json_encode(["message" => "Inscription pour Incroyable Talent ajoutée avec succès"]);
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