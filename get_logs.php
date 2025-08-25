<?php

header('Content-Type: application/json');
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$page = $data['page'] ?? null;
$search = $data['search'] ?? null;

if (is_null($page)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing parameter']);
    exit;
}

if ($search) {
    // Trim whitespace
    $search = trim($search);

    // Validate length
    $maxLength = 200;
    if (strlen($search) > $maxLength) {
        $search = substr($search, 0, $maxLength);
    }

    // Reject too short
    if ($search && strlen($search) < 3) {
        echo json_encode(['error' => 'Missing parameter']);
        exit;
    }
}

$perpage = 10;
$offset = ($page - 1) * $perpage;

if ($search) {
    $sql = "SELECT id, title, timecreated FROM cf_logs".
            " WHERE MATCH(title, log) AGAINST(? IN BOOLEAN MODE) ".
            " ORDER BY id DESC LIMIT ? OFFSET ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sii", $search, $perpage, $offset);

    $countsql = "SELECT COUNT(*) AS total FROM cf_logs WHERE MATCH(title, log) AGAINST(? IN BOOLEAN MODE)";
    $countstmt = $mysqli->prepare($countsql);
    $countstmt->bind_param("s", $search);
} else {
    $sql = "SELECT id, title, timecreated FROM cf_logs ORDER BY id DESC LIMIT ? OFFSET ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ii", $perpage, $offset);
    $countsql = "SELECT COUNT(*) AS total FROM cf_logs";
    $countstmt = $mysqli->prepare($countsql);
}
// Get records.
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);
// Get count for page calculations.
$countstmt->execute();
$countstmt->bind_result($total);
$countstmt->fetch();
echo json_encode((object) ['page' => $page, 'totalPages' => ceil($total / $perpage), 'rows' => $data]);
