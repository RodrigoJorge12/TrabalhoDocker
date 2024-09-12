
async function buscarDados(){
    try{
        const response = await fetch("http://localhost:9000/listagem.php");
        if (response.ok){
            const nomes = await response.json();
            return nomes;
        }
        else{
            alert("erro ao obter nomes");
        }
    }
    catch(error){
        console.log(error);
    }
}

(async() => {
    const nomes = await buscarDados();
    let text = "";
    for(nome of nomes){
        text += `<tr><td>${nome.nome}</td></tr>`
    }
    document.getElementById('corpoTabela').innerHTML = text;
})();