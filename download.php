<?php
/**
 * Evolution Engineering - Secure File Download Handler
 * Gestisce il download sicuro dei file allegati
 */

// Cartella uploads
define('UPLOAD_DIR', __DIR__ . '/uploads/');

// Ottieni il nome del file dalla query string
$file = isset($_GET['file']) ? basename($_GET['file']) : null;

// Validazioni
if (!$file) {
    http_response_code(400);
    die('File non specificato');
}

$file_path = UPLOAD_DIR . $file;

// Verifica che il file esista e sia nella cartella uploads
if (!file_exists($file_path) || !is_file($file_path)) {
    http_response_code(404);
    die('File non trovato');
}

// Verifica che il file sia realmente nella cartella uploads (previene path traversal)
if (realpath($file_path) !== realpath(UPLOAD_DIR . basename($file_path))) {
    http_response_code(403);
    die('Accesso negato');
}

// Estrai il nome originale dal nome salvato (formato: uniqid_nome_originale)
// Esempio: 507c9f2a2e324_documento.pdf -> documento.pdf
$parts = explode('_', $file, 2);
$original_name = isset($parts[1]) ? urldecode($parts[1]) : $file;

// Headers per il download
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $original_name . '"');
header('Content-Length: ' . filesize($file_path));
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Invia il file
readfile($file_path);
exit;
?>
