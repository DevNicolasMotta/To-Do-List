//elementos
const inputTask  = document.getElementById("new-task")
const addButton = document.getElementById("add-task")
const taskList = document.getElementById("taskList")

//adicionando tarefas 
function addTask () {
     const taskText = inputTask.value.trim();  
    if (taskText === "") return; //se o campo estiver vazio n faz nada!!!

    const li = document.createElement("li")
    li.textContent = taskText;

    //criar botão de delete
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete");
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };

    //adicionar botão de excluir ao item da lista
    li.appendChild(deleteButton);

    //marcar tarefa como concluida
    taskList.appendChild(li);

    //limpar campo de input 
    inputTask.value = "";
}

//adicionar tarefa ao clicar no botao
addButton.addEventListener("click", addTask);

//adicionar tarefa ao pressionar Enter
inputTask.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});