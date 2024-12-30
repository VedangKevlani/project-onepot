<?php
// Check if the form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form values from POST request
    $name = $_POST['name'] ?? 'Not Provided';
    $email = $_POST['email'] ?? 'Not Provided';
    $phone = $_POST['phone'] ?? 'Not Provided';
    $institution = $_POST['institution'] ?? 'Not Provided';
    $hall = $_POST['hall'] ?? 'Not Provided';
    $password = $_POST['psw'] ?? 'Not Provided'; // In a real application, avoid storing passwords in plain text
    echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully.']);
} else {
    // Return an error if not a POST request
    header("HTTP/1.1 405 Method Not Allowed");
    echo json_encode(array('error' => 'Method not allowed'));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information</title>
    <style>
        table {
            width: 50%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">User Information</h2>

<table>
    <tr>
        <th>Field</th>
        <th>Information</th>
    </tr>
    <tr>
        <td><strong>Full Name</strong></td>
        <td><?php echo htmlspecialchars($name); ?></td>
    </tr>
    <tr>
        <td><strong>Email</strong></td>
        <td><?php echo htmlspecialchars($email); ?></td>
    </tr>
    <tr>
        <td><strong>Phone Number</strong></td>
        <td><?php echo htmlspecialchars($phone); ?></td>
    </tr>
    <tr>
        <td><strong>Institution/Organization</strong></td>
        <td><?php echo htmlspecialchars($institution); ?></td>
    </tr>
    <tr>
        <td><strong>Hall of Residence</strong></td>
        <td><?php echo htmlspecialchars($hall); ?></td>
    </tr>
    <tr>
        <td><strong>Password</strong></td>
        <td><?php echo htmlspecialchars($password); // In practice, don't display the password ?></td>
    </tr>
</table>

</body>
</html>
