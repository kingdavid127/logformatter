<?php
    $manifestPath = __DIR__ . '/dist/.vite/manifest.json';
    $manifest = json_decode(file_get_contents($manifestPath), true);
    $entry = $manifest['main.js'];
    $jsFile = $entry['file'];
    $cssFiles = $entry['css'] ?? [];
?>

<!DOCTYPE html>
<html>
    <head>
        <title>CF Log Formatter</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php foreach ($cssFiles as $css): ?>
            <link rel="stylesheet" href="/dist/<?= htmlspecialchars($css) ?>">
        <?php endforeach; ?>

        <script type="module" src="/dist/<?= htmlspecialchars($jsFile) ?>"></script>
    </head>
    <body>
        <div id='svelte-root' <?php echo isset($_GET['id']) ? 'data-log-id="'.htmlspecialchars($_GET['id']).'"' : '' ?>></div>
    </body>
</html>
