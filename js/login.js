const btnLogar = document.querySelector("#btnLogar");

btnLogar.addEventListener("click", (e) => {
    e.preventDefault(); //evita que a pagina recarregue

    const email = document.querySelector("#emailLogin").value;
    const senha = document.querySelector("#senhaLogin").value;


    const textoDosUsuarios = localStorage.getItem("usuarios");

    let listaUsuarios;

    if (textoDosUsuarios) {
        // Se existir texto, o JSON.parse transforma o texto em Lista/Objeto
        listaUsuarios = JSON.parse(textoDosUsuarios);
    } else {
        listaUsuarios = [];
    }
    const usuarioValido = listaUsuarios.find(u => u.email === email && u.senha === senha); //busca se os dados coicidem

    if (usuarioValido) {
        alert("Login realizado com sucesso!");
        window.location.href = "lista.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});