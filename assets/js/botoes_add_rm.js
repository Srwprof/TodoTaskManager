let buttonAddTask = document.querySelector("button.btn-add-task");
buttonAddTask.addEventListener('click', () =>{

    task = prompt('Qual é a sua task?');
   const createTask = document.createElement("i");
   createTask.innerHTML = task;
   createTask.classList.add('task');
   console.log(createTask);
   document.querySelector('.grid-main').insertAdjacentElement('beforeend', createTask)
    
});