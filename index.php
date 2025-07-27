<?php
    $manifestPath = __DIR__ . '/dist/.vite/manifest.json';
    $manifest = json_decode(file_get_contents($manifestPath), true);
    $entry = $manifest['js/main.js'];
    $jsFile = $entry['file'];
    $cssFiles = $entry['css'] ?? [];
?>

<!DOCTYPE html>
<html>
    <head>
        <title>CF Log Formatter</title>
        <?php
            echo '<meta property="og:title" content="'.$title.'" />';
            echo '<meta property="og:url" content="https://games.dimbi.org" />';
        ?>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://my.site.com/images/thumb.png" />
        <meta property="og:description" content="Site description" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php foreach ($cssFiles as $css): ?>
            <link rel="stylesheet" href="/cf/dist/<?= htmlspecialchars($css) ?>">
        <?php endforeach; ?>

        <script type="module" src="/cf/dist/<?= htmlspecialchars($jsFile) ?>"></script>
    </head>
    <body>
        <div id='svelte-root' <?php echo isset($_GET['id']) ? 'data-log-id="'.htmlspecialchars($_GET['id']).'"' : '' ?>></div>
    </body>
</html>
