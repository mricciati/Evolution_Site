<?php
/**
 * Evolution Engineering - Contact Form Handler
 * Riceve dati dal form e invia email
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

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => implode(', ', $errors)]);
    exit;
}

// Email destinatario
$recipient = 'info@evolutionengineering.eu';

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
$confirmation_body .= "- Settore: " . (!empty($settore) ? $settore : 'Non specificato') . "\n\n";
$confirmation_body .= "Cordiali saluti,\nEvolution Engineering & Services S.r.l.\n";
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
