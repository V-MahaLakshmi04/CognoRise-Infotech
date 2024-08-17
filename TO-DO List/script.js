document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task';
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <span>${task.text}</span>
                <div>
                    <button class="edit-btn" onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            li.addEventListener('click', () => {
                toggleComplete(index);
            });
            taskList.appendChild(li);
        });
    };

    // Add task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    };

    // Edit task
    window.editTask = (index) => {
        const newText = prompt('Edit the task:', tasks[index].text);
        if (newText) {
            tasks[index].text = newText;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    };

    // Delete task
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    // Toggle task completion
    const toggleComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    // Event Listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    renderTasks();
});
