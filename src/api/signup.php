<?php
   header("Content-Type: application/json");

   // Gérer CORS
   $allowedOrigins = ['https://www.metana.fr'];
   if (isset($_SERVER['HTTP_ORIGIN'])) {
       if (in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins) || strpos($_SERVER['HTTP_ORIGIN'], 'localhost') !== false) {
           header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
       } else {
           header("Access-Control-Allow-Origin: https://www.metana.fr");
       }
   }
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Allow-Headers: Content-Type");

   require_once "config.php";

   if ($_SERVER["REQUEST_METHOD"] !== "POST") {
       http_response_code(405);
       echo json_encode(["error" => "Method not allowed"]);
       exit;
   }

   $input = json_decode(file_get_contents("php://input"), true);

   if (!isset($input["name"]) || !isset($input["stand"]) || !isset($input["time_slot"])) {
       http_response_code(400);
       echo json_encode(["error" => "Missing required fields"]);
       exit;
   }

   $name = trim($input["name"]);
   $stand = trim($input["stand"]);
   $time_slot = trim($input["time_slot"]);

   if (empty($name) || empty($stand) || empty($time_slot)) {
       http_response_code(400);
       echo json_encode(["error" => "Fields cannot be empty"]);
       exit;
   }

   try {
       $stmt = $pdo->prepare("INSERT INTO volunteers (name, stand, time_slot) VALUES (:name, :stand, :time_slot)");
       $stmt->execute([
           ":name" => $name,
           ":stand" => $stand,
           ":time_slot" => $time_slot
       ]);
       http_response_code(201);
       echo json_encode(["message" => "Volunteer registered successfully"]);
   } catch (PDOException $e) {
       if ($e->getCode() == 23000) { // Violation de contrainte unique
           http_response_code(409);
           echo json_encode(["error" => "This time slot is already taken for this stand"]);
       } else {
           http_response_code(500);
           echo json_encode(["error" => "Server error: " . $e->getMessage()]);
       }
   }
   ?>