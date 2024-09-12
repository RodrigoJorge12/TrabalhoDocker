document.getElementById("btn-salvar").addEventListener("click", async function(){
    const nome = document.getElementById("input-nome").value;
    if(!nome){
        alert("Digite um nome valido");
        return;
    }

    try {
        // Envia a requisição ao backend
        const response = await fetch("http://localhost:9000/cadastro.php", { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": nome
            })
        });

        // Se a resposta for OK, recarrega a página
        if (response.ok) {
            window.location.reload(true);
        } else {
            alert("Erro ao salvar o nome.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
    window.location.reload(true);
})