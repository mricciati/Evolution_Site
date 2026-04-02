<?php
/**
 * Evolution Engineering - Contact Form Handler with File Upload
 * Riceve dati dal form, gestisce allegati e invia email
 */

// Headers CORS se necessario
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Verifica che sia una richiesta POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito']);
    exit;
}

// Configurazione upload
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('MAX_FILE_SIZE', 25 * 1024 * 1024); // 25 MB
define('ALLOWED_EXTENSIONS', ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'zip', 'dwg', 'step', 'iges', 'jpg', 'jpeg', 'png']);

// Crea cartella uploads se non esiste
if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// Recupera e sanifica i dati dal form
$nome = sanitize_input($_POST['Nome'] ?? '');
$azienda = sanitize_input($_POST['Azienda'] ?? '');
$email = sanitize_input($_POST['Email'] ?? '');
$telefono = sanitize_input($_POST['Telefono'] ?? '');
$settore = sanitize_input($_POST['Settore'] ?? '');
$oggetto = sanitize_input($_POST['Oggetto'] ?? '');
$messaggio = sanitize_input($_POST['Messaggio'] ?? '');

// Validazione campi obbligatori
$errors = [];
if (empty($nome)) $errors[] = 'Nome obbligatorio';
if (empty($azienda)) $errors[] = 'Azienda obbligatoria';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email non valida';
if (empty($messaggio)) $errors[] = 'Messaggio obbligatorio';

// Gestione file allegati
$uploaded_files = [];
$file_errors = [];

if (!empty($_FILES['allegati']['name'][0])) {
    $file_count = count($_FILES['allegati']['name']);

    for ($i = 0; $i < $file_count; $i++) {
        if ($_FILES['allegati']['error'][$i] === UPLOAD_ERR_NO_FILE) {
            continue; // File non fornito, salta
        }

        if ($_FILES['allegati']['error'][$i] !== UPLOAD_ERR_OK) {
            $file_errors[] = 'Errore upload file: ' . $_FILES['allegati']['name'][$i];
            continue;
        }

        $file_name = $_FILES['allegati']['name'][$i];
        $file_size = $_FILES['allegati']['size'][$i];
        $file_tmp = $_FILES['allegati']['tmp_name'][$i];

        // Valida dimensione
        if ($file_size > MAX_FILE_SIZE) {
            $file_errors[] = 'File troppo grande: ' . $file_name . ' (max 25 MB)';
            continue;
        }

        // Valida estensione
        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if (!in_array($file_ext, ALLOWED_EXTENSIONS)) {
            $file_errors[] = 'Tipo di file non consentito: ' . $file_name;
            continue;
        }

        // Crea nome file unico
        $unique_name = uniqid() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $file_name);
        $file_path = UPLOAD_DIR . $unique_name;

        // Sposta il file
        if (move_uploaded_file($file_tmp, $file_path)) {
            $uploaded_files[] = [
                'original_name' => $file_name,
                'saved_name' => $unique_name,
                'size' => round($file_size / 1024, 2) // KB
            ];
        } else {
            $file_errors[] = 'Errore nel salvataggio del file: ' . $file_name;
        }
    }
}

// Se ci sono errori di file, ma il resto è valido, avvisa ma continua
if (!empty($file_errors) && !empty($uploaded_files)) {
    // Continua comunque, alcuni file sono stati caricati
} elseif (!empty($file_errors)) {
    // Se nessun file è stato caricato ma ce ne sono errori
    $errors = array_merge($errors, $file_errors);
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => implode(', ', $errors)]);
    exit;
}

// Email destinatario
$recipient = 'info@evolutionengineering.eu';

// Genera URL base per i download (usato nelle email)
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'];
$base_url = $protocol . '://' . $host;

// Costruisci il corpo dell'email
$email_body = "=== NUOVO MESSAGGIO DAL FORM DI CONTATTO ===\n\n";
$email_body .= "NOME: $nome\n";
$email_body .= "AZIENDA: $azienda\n";
$email_body .= "EMAIL: $email\n";
$email_body .= "TELEFONO: " . (!empty($telefono) ? $telefono : 'Non fornito') . "\n";
$email_body .= "SETTORE: " . (!empty($settore) ? $settore : 'Non specificato') . "\n";
$email_body .= "OGGETTO: " . (!empty($oggetto) ? $oggetto : 'Senza oggetto') . "\n\n";
$email_body .= "--- MESSAGGIO ---\n";
$email_body .= $messaggio . "\n\n";

// Aggiungi informazioni sui file allegati con link di download
if (!empty($uploaded_files)) {
    $email_body .= "--- ALLEGATI ---\n";
    foreach ($uploaded_files as $file) {
        $download_link = $base_url . '/download.php?file=' . urlencode($file['saved_name']);
        $email_body .= "- " . $file['original_name'] . " (" . $file['size'] . " KB)\n";
        $email_body .= "  Scarica: " . $download_link . "\n";
    }
    $email_body .= "\n";
}

$email_body .= "--- INFORMAZIONI ---\n";
$email_body .= "Data: " . date('d/m/Y H:i:s') . "\n";
$email_body .= "IP Cliente: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Headers email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Invia email al destinatario
$subject = "Nuovo contatto da Evolution Engineering: " . (!empty($oggetto) ? $oggetto : 'Richiesta generica');
$success = mail($recipient, $subject, $email_body, $headers);

if (!$success) {
    http_response_code(500);
    echo json_encode(['error' => 'Errore nell\'invio dell\'email']);
    exit;
}

// Invia conferma all'utente
$confirmation_body = "Caro $nome,\n\n";
$confirmation_body .= "Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.\n\n";
$confirmation_body .= "I tuoi dati:\n";
$confirmation_body .= "- Nome: $nome\n";
$confirmation_body .= "- Azienda: $azienda\n";
$confirmation_body .= "- Email: $email\n";
$confirmation_body .= "- Settore: " . (!empty($settore) ? $settore : 'Non specificato') . "\n";

if (!empty($uploaded_files)) {
    $confirmation_body .= "\nAllegati ricevuti:\n";
    foreach ($uploaded_files as $file) {
        $download_link = $base_url . '/download.php?file=' . urlencode($file['saved_name']);
        $confirmation_body .= "- " . $file['original_name'] . "\n";
        $confirmation_body .= "  Scarica: " . $download_link . "\n";
    }
}

$confirmation_body .= "\nCordiali saluti,\nEvolution Engineering & Services S.r.l.\n";
$confirmation_body .= "info@evolutionengineering.eu\n";
$confirmation_body .= "+39 327 7078545\n";

$confirmation_headers = "From: info@evolutionengineering.eu\r\n";
$confirmation_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($email, "Conferma ricezione - Evolution Engineering", $confirmation_body, $confirmation_headers);

// Successo
http_response_code(200);
echo json_encode(['success' => true, 'message' => 'Email inviata con successo']);
exit;

/**
 * Sanifica input per evitare injection
 */
function sanitize_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}
?>
