<?php

// Définir les en-têtes pour retourner du JSON et autoriser les requêtes CORS
header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *"); // Permet à Angular d'accéder à l'API
header("Access-Control-Allow-Methods: GET"); // Méthodes autorisées
header("Access-Control-Allow-Headers: Content-Type");

// Informations de connexion à la base de données
$host = "aubergine.o2switch.net";
$user = "jegu8475_develop";
$password = "MonMotDePasse1234";
$database = "jegu8475_test";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$database", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Définir l'encodage en UTF-8
    $pdo->exec("SET NAMES 'utf8'");
} catch (PDOException $e) {
    // En cas d'erreur, retourner une réponse JSON
    http_response_code(500);
    echo json_encode(["error" => "Erreur de connexion : " . $e->getMessage()]);
    exit();
}
?>