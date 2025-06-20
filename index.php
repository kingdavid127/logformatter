<!DOCTYPE html>
<html>
    <head>
        <title>CF Log Formatter</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./js/dist/cf_logs.css">
        <script src="./js/dist/cf_logs.js"></script>
    </head>
    <body>
        <div id='svelte-root' <?php echo isset($_GET['id']) ? 'data-log-id="'.htmlspecialchars($_GET['id']).'"' : '' ?>></div>
    </body>
</html>
