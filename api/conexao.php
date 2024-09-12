<?php
class conexao{

    private PDO $pdo;

    public function __construct($host, $dbname, $username, $password) {
        $dsn = "sqlite:host=$host;dbname=$dbname;charset=utf8mb4";
        $this->pdo = new PDO($dsn, $username, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "CREATE TABLE IF NOT EXISTS `nomes` (
            nome VARCHAR(100) NOT NULL
        )";
        $this->pdo->query($sql);
    }

    public function getConexao(){
        return $this->pdo;
    }

    public function closeConexao(){
        $this->pdo = null;
    }

}

?>