<?php
// PHP Script: Random Content Generator

// 1. Set the content header to JSON.
// This tells the requesting website (the external client) that the response is structured data.
header('Content-Type: application/json');

// Define the two possible content blocks
$content_a = [
    "id" => "A",
    "title" => "The Emerald Tablet",
    "message" => "A powerful artifact with text written in green ink.",
    "color" => "green"
];

$content_b = [
    "id" => "B",
    "title" => "The Ruby Scabbard",
    "message" => "An ancient weapon sheath made of polished red stone.",
    "color" => "red"
];

$selected_content = null;

// 2. Check for the 'id' query parameter to force a specific result.
// Example URL: random_content.php?id=A
if (isset($_GET['id'])) {
    $requested_id = strtoupper($_GET['id']);

    if ($requested_id === 'A') {
        $selected_content = $content_a;
    } elseif ($requested_id === 'B') {
        $selected_content = $content_b;
    }
}

// 3. If no valid 'id' parameter was provided, perform the 50/50 random selection.
if ($selected_content === null) {
    // Generate a random number: 1 or 2
    $choice = rand(1, 2);

    if ($choice === 1) {
        $selected_content = $content_a;
    } else {
        $selected_content = $content_b;
    }
}

// 4. Output the chosen content as a JSON string.
echo json_encode($selected_content, JSON_PRETTY_PRINT);

?>
