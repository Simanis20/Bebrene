<?php
session_start();
$_SESSION["id"] = 2;

echo json_encode(["has_access" => isset($_SESSION["id"])]);