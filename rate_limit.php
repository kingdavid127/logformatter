<?php
// rate_limit.php - Basic IP-based rate limiter

$limit = 10;            // Max requests
$window = 60;           // In seconds
$ip = $_SERVER['REMOTE_ADDR'];
$rateFile = sys_get_temp_dir() . "/rate_limit_" . md5($ip);

$now = time();
$history = [];

if (file_exists($rateFile)) {
    $history = json_decode(file_get_contents($rateFile), true);
    $history = array_filter($history, fn($t) => $t > $now - $window);
}

if (count($history) >= $limit) {
    http_response_code(429);
    echo json_encode(['error' => 'Rate limit exceeded. Try again later.']);
    // If they get rate limited too many times, you could ban them here.
    exit;
}

$history[] = $now;
file_put_contents($rateFile, json_encode($history));
