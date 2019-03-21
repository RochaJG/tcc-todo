var listElement = document.querySelector("#app ul"); // Elemento de lista dentro do App
var inputElement = document.querySelector("#app input"); // Elemento de input de texto dentro de App
var buttonElement = document.querySelector("#app button"); // Elemento do botão de salvar dentro de App

// Busca os dados que estão armazenados no localStorage do navegador
var todos = JSON.parse(localStorage.getItem("listaTodos")) || [];

function desenhaToDos() {
    listElement.innerHTML = "";

    for (todo of todos) {
        var todoElement = document.createElement("li"); // Elemento de lista
        var todoSpan = document.createElement("span"); // Elemento span de texto
        var todoText = document.createTextNode(todo.msg); // Texto do ToDo
        var btnElement = document.createElement("button"); // Botão de excluir

        btnElement.setAttribute("class", "btn btn-danger");
        todoSpan.setAttribute("class", "todo-text");

        var pos = todos.indexOf(todo);
        btnElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

        var excluirElement = document.createTextNode("Excluir");

        btnElement.appendChild(excluirElement); // Inclui o texto dentro do botão

        // Adiciona os elementos dentro do elemento de lista (li)
        todoElement.appendChild(btnElement);
        todoSpan.appendChild(todoText);
        todoElement.appendChild(todoSpan);

        // Adiciona o elemento de lista dentro da lista de elementos (ul)
        listElement.appendChild(todoElement);
    }
}

desenhaToDos();

function addTudo() {
    var todoText = inputElement.value; // Captura o texto inserido no input

    todos.unshift({
        msg: todoText
    }); // Adiciona o novo ToDo no início da lista
    inputElement.value = ""; // Limpa o input do usuário
    desenhaToDos(); // Desenha os ToDos
    saveToStorage(); // Salva os dados no navegador
}

buttonElement.onclick = addTudo;

function deleteTodo(pos) {
    todos.splice(pos, 1); // Remove o elemento do array na posição especificada
    desenhaToDos();
    saveToStorage();
}

function saveToStorage() {
    // Armazena os dados da variável no localStorage do navegador
    localStorage.setItem("listaTodos", JSON.stringify(todos));
}