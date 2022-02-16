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
      if(tasks[i].style.backgroundColor === 'gray'){
        tasks[i].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'gray';
    }
  })
}
printColor();