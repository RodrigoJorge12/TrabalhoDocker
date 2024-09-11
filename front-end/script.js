const btnCadastro = document.getElementById("btn-cadastro");
const btnListagem = document.getElementById("btn-listagem");

btnCadastro.addEventListener("click",  function(){
    window.location = "cadastro/index.html";
});

btnListagem.addEventListener("click",  function(){
    window.location = "listagem/index.html";
});