let input = document.getElementById('texto-tarefa');
let buttonCreat = document.getElementById('criar-tarefa');
let listOl = document.getElementById('lista-tarefas');

function creatTask() {
  let listTexts = document.createElement('li');
  listTexts.className = 'tasks';
  listTexts.innerText = input.value;
  listOl.appendChild(listTexts);
  input.value = ' ';
}
buttonCreat.addEventListener('click', creatTask);
