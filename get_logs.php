<?php
// save_log.php - Accepts a POSTed log and returns its ID
header('Content-Type: application/json');
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$page = $data['page'] ?? '';

if (!$page) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing parameter']);
    exit;
}

$perpage = 20;
$offset = ($page - 1) * $perpage;

$stmt = $mysqli->prepare("SELECT id, title, timecreated FROM cf_logs ORDER BY timecreated DESC LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $perpage, $offset);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
