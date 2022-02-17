const input = document.getElementById('texto-tarefa');
const buttonCreat = document.getElementById('criar-tarefa');
const listOl = document.getElementById('lista-tarefas');

function creatTask() {
  const listTexts = document.createElement('li');
  listTexts.className = 'tasks';
  listTexts.innerText = input.value;
  listOl.appendChild(listTexts);
  input.value = '';
}
buttonCreat.addEventListener('click', creatTask);

function printColor() {
  listOl.addEventListener('click', function(event){
    const tasks = document.querySelectorAll('.tasks')
    for (let i = 0; i < tasks.length; i += 1){
      if (tasks[i].style.backgroundColor === 'gray'){ //mentoria se a tarefa for 'gray'
        tasks[i].style.backgroundColor = 'white';// mentoria a tarefa sera pintada de 'white'
      }
      event.target.style.backgroundColor = 'gray';//mentoria quando clica em uma tarefa ela fica 'gray'
    }
  })
}
printColor();

function taskFinished() {
  listOl.addEventListener('dblclick', function(event){
    if (event.target.classList.contains('completed')){
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}
taskFinished();

function clearTasks() {
  const buttonClean = document.getElementById('apaga-tudo');
  buttonClean.addEventListener('click', function(){
    const list = document.querySelector('ol');
    list.innerHTML = ''; // Slack Explicação do aluno Felipe Avila.
  })
}
clearTasks();

function buttonRemoveTasksFinished() {
  const buttonRemove = document.getElementById('remover-finalizados');
  buttonRemove.addEventListener('click', function(){
    const markTask = document.querySelectorAll('.completed');
    for (let i = 0; i < markTask.length; i += 1){
      listOl.removeChild(markTask[i]);
    }
  });
}
buttonRemoveTasksFinished();

window.onload = function(){
  const getTasks = localStorage.getItem('list');
  listOl.innerHTML = getTasks;
}
function buttonSaveTask(){
  const saveTask = document.getElementById('salvar-tarefas');
  saveTask.addEventListener('click', function(){
    localStorage.setItem('list', listOl.innerHTML);
  })
}
buttonSaveTask();

function buttonMoveUp(){
  const moveUp = document.getElementById('mover-cima');
  moveUp.addEventListener('click', function(){
    const firstElement = document.querySelectorAll('li')
    for (let i = 0; i < firstElement.length; i += 1){
      if (firstElement[i].style.backgroundColor === "gray"){
      firstElement[i].parentNode.insertBefore(firstElement[i], firstElement[i].previousSibling)
      }
    }
  })
}
buttonMoveUp();

function buttonMoveDown(){
  const moveDown = document.getElementById('mover-baixo');
  moveDown.addEventListener('click', function(){
    const secondElement = document.querySelectorAll('li');
    for (let i = 0; i < secondElement.length; i += 1){
      if (secondElement[i].style.backgroundColor === "gray"){
        secondElement[i].parentNode.insertBefore(secondElement[i].nextSibling, secondElement[i]);
      }
    }
  })
}
buttonMoveDown();


function removeSelected(){
  const removeTask = document.querySelector('#remover-selecionado');
  const listTasks = document.querySelectorAll('li');
  removeTask.addEventListener('click', function(){
    for (let i = 0; i < listTasks.length; i += 1) {
      if (listTasks[i].style.backgroundColor === 'gray'){
        listTasks[i].remove()
      }
    }
  })
}
removeSelected();
