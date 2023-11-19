 const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    ${taskText}
    <button class="delete-button">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';

  const deleteButton = taskItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
  
}


 
