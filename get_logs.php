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
if (is_null($page)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing parameter']);
    exit;
}
$search = $data['search'] ?? null;

$perpage = 10;
$offset = ($page - 1) * $perpage;

// TODO: Validate only letters numbers and double quotes allowed.
if (!is_null($search)) {
// Prepare the full-text version (BOOLEAN MODE with required words)
$match_query = '+' . implode(' +', explode(' ', $search));

// Final SQL
$sql = "
    SELECT *
    FROM cf_logs
    WHERE MATCH(title, log) AGAINST(? IN BOOLEAN MODE)
    ORDER BY relevance DESC LIMIT ? OFFSET ?
";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param('sii', $match_query, $perpage, $offset);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);

$stmt = $mysqli->prepare("SELECT COUNT(*) AS total FROM cf_logs WHERE MATCH(title, log) AGAINST(? IN BOOLEAN MODE)");
$stmt->bind_param('s', $match_query);
$stmt->execute();
$stmt->bind_result($total);
$stmt->fetch();
} else {
$stmt = $mysqli->prepare("SELECT id, title, timecreated FROM cf_logs ORDER BY id DESC LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $perpage, $offset);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);


$stmt = $mysqli->prepare("SELECT COUNT(*) AS total FROM cf_logs");
$stmt->execute();
$stmt->bind_result($total);
$stmt->fetch();
}

echo json_encode((object) ['page' => $page, 'totalPages' => ceil($total / $perpage), 'rows' => $data]);
