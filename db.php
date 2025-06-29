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
    title VARCHAR(50) NOT NULL,
    log MEDIUMTEXT NOT NULL,
    timecreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_timecreated (timecreated);
    FULLTEXT (title, log)
);
 */

/**
To add title column if missing:
ALTER TABLE cf_logs ADD COLUMN title VARCHAR(50) NOT NULL;

To add full text index if missing:
ALTER TABLE cf_logs ADD FULLTEXT (title, log);

To change log to MEDIUMTEXT column (if you already created it as TEXT:
ALTER TABLE cf_logs
MODIFY COLUMN log MEDIUMTEXT NOT NULL;

ALTER TABLE cf_logs ADD COLUMN timecreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE cf_logs
ADD INDEX idx_timecreated (timecreated);
 */