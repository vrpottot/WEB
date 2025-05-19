<?php
header('Content-Type: application/json; charset=utf-8');


// Проверяем метод
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['error' => 'Только POST-запросы']));
}

// Получаем данные
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';

// Валидация
if (empty($name) || empty($phone)) {
    http_response_code(400);
    exit(json_encode(['error' => 'Заполните все поля']));
}

// Отправка письма (упрощенная реализация)
$to = 'rbru-metrika@yandex.ru';
$subject = 'Письмо для Rocket Business (возьмите на работу пожалуйста)';
$message = "Имя: $name\nТелефон: $phone";
$headers = "From: rbru-metrika@yandex.ru\r\n";

if (@mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => 'Письмо отправлено']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка отправки']);
}
?>