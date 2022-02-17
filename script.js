let input = document.getElementById('texto-tarefa');
let buttonCreat = document.getElementById('criar-tarefa');
let listOl = document.getElementById('lista-tarefas');

function creatTask() {
  let listTexts = document.createElement('li');
  listTexts.className = 'tasks';
  listTexts.innerText = input.value;
  listOl.appendChild(listTexts);
  input.value = '';
}
buttonCreat.addEventListener('click', creatTask);

function printColor() { 
  listOl.addEventListener('click', function(event){
    let tasks = document.querySelectorAll('.tasks')
for(let i = 0; i < tasks.length; i += 1){
      if(tasks[i].style.backgroundColor === 'gray'){ //mentoria se a tarefa for 'gray'
        tasks[i].style.backgroundColor = 'white';// mentoria a tarefa sera pintada de 'white'
      }
      event.target.style.backgroundColor = 'gray';//mentoria quando clica em uma tarefa ela fica 'gray'
    }
  })
}
printColor();

function taskFinished() {
  listOl.addEventListener('dblclick', function(event){
    if(event.target.classList.contains('completed')){
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
