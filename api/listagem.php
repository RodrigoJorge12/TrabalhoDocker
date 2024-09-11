<?php
require_once "conexao.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if($_SERVER["REQUEST_METHOD"] == "GET"){
    $conexao = new conexao("localhost", "tecnologias_sustentaveis", "root", "");
    $pdo = $conexao->getConexao();
    $sql = "SELECT * FROM `nomes`";
    $stmt = $pdo->query($sql);
    $nomes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $nomes = json_encode($nomes);
    echo $nomes;
}

?>