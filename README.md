# TrabalhoDocker

Aplicação de cadastro e listagem de nomes com JavaScript, PHP e MySQL

## Como rodar a aplicação

Siga os passos abaixo para rodar a aplicação corretamente.

### 1. Clonar o Repositório
Clone o repositório para sua máquina local:

```bash
git clone https://github.com/RodrigoJorge12/TrabalhoDocker.git
```
### 2. Entrar na pasta do projeto
Entre na pasta para onde o projeto foi clonado:
```bash
cd TrabalhoDocker
```

### 3. Instalar Docker e Docker Compose
Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Se ainda não tiver, você pode instalá-los:

- [Instruções de instalação do Docker](https://docs.docker.com/get-docker/)
- [Instruções de instalação do Docker Compose](https://docs.docker.com/compose/install/)

### 4. Build e Up dos containers Docker
Para construir as imagens e rodar o projeto com Docker, execute:

para derrubar quaisquer containers existentes
```bash
docker-compose down
```

para buildar e rodar o projeto
```bash
docker-compose up --build
```

Este comando vai criar os containers necessários e iniciar os serviços definidos no `docker-compose.yml`.

### 5. Acessar a aplicação
Quando o Docker Compose terminar de subir os containers, acesse no seu navegador

```bash
http://localhost:8080
```

### 6. Parar os containers
Para parar a execução dos containers, utilize o comando ja citado:

```bash
docker-compose down
```

### Observações:
- Verifique se as portas utilizadas pelo sistema presentes no docker-compose.yml estão disponiveis em sua maquina.

