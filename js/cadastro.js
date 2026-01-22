const btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.addEventListener("click", function(evento) {
    evento.preventDefault();

    let email = document.querySelector("#emailCadastro").value;
    let senha = document.querySelector("#senhaCadastro").value;

    if (email == "" || senha == "") {
        alert("Preencha todos os campos!");
        return;
    }
    
    let textoNoNavegador = localStorage.getItem("usuarios");

    let listaUsuarios;
    
    if (textoNoNavegador == null) {
        listaUsuarios = []; 
    } else {
        listaUsuarios = JSON.parse(textoNoNavegador);
    }


let emailJaCadastrado = listaUsuarios.some(usuario => usuario.email.toLowerCase() === email.toLowerCase());// Verifica se o e-mail já existe na lista de usuários cadastrados

if (emailJaCadastrado) {
    alert("Este e-mail já está em uso. Tente outro!");
    return;
}

    listaUsuarios.push({ email: email, senha: senha });
    
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));// Salva a lista de volta no navegador (como texto)

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html";
});