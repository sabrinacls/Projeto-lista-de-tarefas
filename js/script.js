let listaTarefas = [];
let ul = document.querySelector("ul")
let add = document.querySelector("#btnadd")
let excluir = document.querySelector("btnExcluir")
let input = document.querySelector("#input-li");

btnadd.addEventListener("click", function () {
    let valor = input.value;

    if (valor === "") {
        alert("O campo não pode ser vazio.")
        input.value = "";
        return;
    }

    let jaExiste = listaTarefas.some(tarefa => tarefa.texto.toLowerCase() === valor.toLowerCase());
    if (jaExiste) {
        alert("Essa tarefa já foi adicionada!");
        input.value = "";
        return;
    }

    let tarefa = {
        id: Date.now(), //pega os millisegundos atuais, dando um id único para o obj
        texto: valor
    }

    listaTarefas.push(tarefa);

    let li = document.createElement("li");
    li.classList.add("li-js")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    li.innerText = tarefa.texto;

    li.setAttribute("data-id", tarefa.id);
    li.appendChild(checkbox);

    ul.appendChild(li);

    input.value = "";

})

btnExcluir.addEventListener("click", function () {
    let tarefasParaRemover = document.querySelectorAll("li");

    tarefasParaRemover.forEach(li => {
        let checkbox = li.querySelector("input[type='checkbox']");

        if (checkbox && checkbox.checked) {
            let idParaRemover = Number(li.getAttribute("data-id"));

            // Remove do array 
            listaTarefas = listaTarefas.filter(tarefa => tarefa.id !== idParaRemover);

            // Remove da tela
            li.remove();
        }
    });

})