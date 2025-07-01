<?php
// save_log.php - Accepts a POSTed log and returns its ID
header('Content-Type: application/json');
require_once 'db.php';


const MAXLIMIT = 500000;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$log = $data['log'] ?? '';
$title = $data['title'] ?? '';

if (!$log) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing log']);
    exit;
}

if (!$title) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing title']);
    exit;
}

if (strlen($log) > MAXLIMIT) {
    http_response_code(413);
    echo json_encode(['error' => 'Log too large.']);
    exit;
}

if (!preg_match('/^[a-zA-Z0-9 _-]+$/', $title)) {
    http_response_code(413);
    echo json_encode(['error' => "Invalid title. Only letters, numbers, spaces, dashes, and underscores are allowed."]);
    exit;
}

$stmt = $mysqli->prepare("INSERT INTO cf_logs (title, log) VALUES (?, ?)");
$stmt->bind_param("ss", $title, $log);
$stmt->execute();
$id = $mysqli->insert_id;

echo json_encode(['id' => (int)$id]);
