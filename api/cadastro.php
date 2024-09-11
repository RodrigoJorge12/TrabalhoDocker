<?php
require_once "conexao.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $nome = $data["nome"];
    $conexao = new conexao("localhost", "tecnologias_sustentaveis", "root", "");
    $pdo = $conexao->getConexao();
    $sql = "INSERT INTO `nomes` (nome) VALUES ('$nome')";
    $pdo->query($sql);
}



?>