<?php

require_once 'config.php';

try {
    $mysqli = new mysqli($host, $user, $pass, $db, $port);

    if ($mysqli->connect_error) {
        die('Connection failed: ' . $mysqli->connect_error);
    }

    // Set charset
    $mysqli->set_charset('utf8mb4');
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    echo $e->getMessage();
    exit;
}

/**
 * To create the table:
CREATE TABLE cf_logs (
id INT AUTO_INCREMENT PRIMARY KEY,
log TEXT NOT NULL
);
 */