<?php
// Файлы phpmailer
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';
require 'phpMailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b>$phone<br><br>
<b>Сообщение:</b><br>$message
";
$email_title = "Подписка на рассылку";
$email_body = "
<h2>Новый запрос на рассылку</h2>
<b>Почта:</b><br>$email
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'knastya76r@mail.ru'; // Логин на почте
    $mail->Password   = '7irHfRY5z1ro393yQehh'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('knastya76r@mail.ru', 'Анастасия Курылева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('knastya76@yandex.ru');

// Отправка сообщения
$mail->isHTML(true);
// Проверка есть email или нет
if(isset($_POST['subscribe_button'])){
    $mail->Subject = $email_title;
    $mail->Body = $email_body; 
    header('Location: subscribe.html');
} else {
    $mail->Subject = $title;
    $mail->Body = $body; 
    header('Location: thankyou.html');
}


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}



// $email = new PHPMailer\PHPMailer\PHPMailer();

// try {
//     $email->isSMTP();   
//     $email->CharSet = "UTF-8";
//     $email->SMTPAuth   = true;
//     // $email->SMTPDebug = 2;
//     $email->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

//     // Настройки вашей почты
//     $email->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
//     $email->Username   = 'knastya76r@mail.ru'; // Логин на почте
//     $email->Password   = '7irHfRY5z1ro393yQehh'; // Пароль на почте
//     $email->SMTPSecure = 'ssl';
//     $email->Port       = 465;
//     $email->setFrom('knastya76r@mail.ru', 'Анастасия Курылева'); // Адрес самой почты и имя отправителя

//     // Получатель письма
//     $email->addAddress('knastya76@yandex.ru');


// $email->isHTML(true);
// $email->Subject = $email_title;
// $email->Body = $email_body; 
// // Проверяем отравленность сообщения
// if ($email->send()) {header('location: subscribe.html');} 
// else {$result = "error";}

// } catch (Exception $e) {
//     $result = "error";
//     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }


// Отображение результата
