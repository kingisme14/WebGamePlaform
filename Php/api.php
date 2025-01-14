<?php
// 資料庫連接設定
$servername = "localhost"; // 資料庫伺服器
$username = "root"; // MySQL 使用者名稱
$password = ""; // MySQL 密碼（XAMPP 預設為空）
$dbname = "todo"; // 使用的資料庫名稱

// 創建資料庫連接
$conn = new mysqli($servername, $username, $password, $dbname);

// 檢查連接是否成功
if ($conn->connect_error) {
    die("資料庫連接失敗: " . $conn->connect_error);
}

header('Content-Type: application/json');
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "GET") {
    $sql = "SELECT * FROM tasks";
    $result = $conn->query($sql);
    $tasks = [];
    while ($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
    echo json_encode($tasks); // 返回所有任務的 JSON
}

if ($method == "POST") {
    $description = $_POST["description"];
    $sql = "INSERT INTO tasks (description, completed) VALUES ('$description', '0')";
    $result = $conn->query($sql);

    if ($result) {
        // 如果插入成功，返回插入的 ID 和描述
        echo json_encode(["id" => $conn->insert_id, "description" => $description, "completed" => 0]);
    } else {
        // 如果插入失敗，返回錯誤訊息
        echo json_encode(["error" => "插入資料失敗"]);
    }
}

if ($method == "DELETE") {
    // 從請求中獲取要刪除的 ID
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['id'])) {
        $id = $data['id'];
        $sql = "DELETE FROM tasks WHERE id = $id";
        $result = $conn->query($sql);

        if ($result) {
            echo json_encode(["message" => "刪除成功", "id" => $id]);
        } else {
            echo json_encode(["error" => "刪除失敗"]);
        }
    } else {
        echo json_encode(["error" => "未提供 ID"]);
    }
}

if ($method == "PUT") {
    // 更新完成狀態
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['id']) && isset($data['completed'])) {
        $id = $data['id'];
        $completed = $data['completed'];
        $sql = "UPDATE tasks SET completed = $completed WHERE id = $id";
        $result = $conn->query($sql);

        if ($result) {
            echo json_encode(["message" => "更新成功", "id" => $id, "completed" => $completed]);
        } else {
            echo json_encode(["error" => "更新失敗"]);
        }
    } else {
        echo json_encode(["error" => "未提供 ID 或 completed"]);
    }
}

?>
