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
$page = $data['page'] ?? null;

if (is_null($page)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing parameter']);
    exit;
}

$perpage = 10;
$offset = ($page - 1) * $perpage;

$stmt = $mysqli->prepare("SELECT id, title, timecreated FROM cf_logs ORDER BY id DESC LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $perpage, $offset);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);
// Get count for page calculations.
$stmt = $mysqli->prepare("SELECT COUNT(*) AS total FROM cf_logs");
$stmt->execute();
$stmt->bind_result($total);
$stmt->fetch();
echo json_encode((object) ['page' => $page, 'totalPages' => ceil($total / $perpage), 'rows' => $data]);
