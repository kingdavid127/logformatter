<?php

// load_log.php - Accepts a GET request with ?id= and returns the log
header('Content-Type: application/json');
require_once 'db.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid or missing ID']);
    exit;
}

$stmt = $mysqli->prepare("SELECT log FROM cf_logs WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$log = $stmt->get_result()->fetch_column();

if ($log === false) {
    http_response_code(404);
    echo json_encode(['error' => 'Log not found']);
    exit;
}

echo json_encode(['log' => $log]);
