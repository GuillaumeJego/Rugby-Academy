<?php
// // Définir les en-têtes pour retourner du JSON et autoriser les requêtes CORS
// header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *"); // Permet à Angular d'accéder à l'API
// header("Access-Control-Allow-Methods: GET"); // Méthodes autorisées
// header("Access-Control-Allow-Headers: Content-Type");

// Inclure la connexion à la base de données
include "db_connect.php";

try {
    // Requête SQL pour récupérer tous les tests
    $stmt = $pdo->query("SELECT * FROM tests");
    $tests = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retourner les données en JSON
    echo json_encode($tests);
} catch (PDOException $e) {
    // En cas d'erreur, retourner une réponse JSON avec un code 500
    http_response_code(500);
    echo json_encode(["error" => "Erreur lors de la récupération des tests : " . $e->getMessage()]);
}
?>