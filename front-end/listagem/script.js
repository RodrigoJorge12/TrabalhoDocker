



async function buscarDados(){
    try{
        const response = await fetch("http://localhost:8080/listagem.php");
        if (response.ok){
            const nomes = await response.json();
            return nomes;
        }
        else{
            alert("erro ao obter nomes");
        }
    }
    catch(error){
        alert("erro ao listar nomes");
    }
}

(async() => {
    const nomes = await buscarDados();
    let text = "";
    for(nome of nomes){
        text += `<tr><td>${nome.id}</td><td>${nome.nome}</td></tr>`
    }
    document.getElementById('corpoTabela').innerHTML = text;
})();