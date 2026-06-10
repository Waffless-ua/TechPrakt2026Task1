import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="tracker-container">
    <h1>Трекер завдань</h1>
    <div class="input-group">
      <input type="text" id="taskInput" placeholder="Що потрібно зробити?">
      <button id="addBtn">Додати</button>
    </div>
    <ul id="taskList"></ul>
  </div>
`

const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});