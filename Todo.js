document.getElementById('add-todo-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');

        const newTodo = document.createElement('li');

        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTodo);
        });

        newTodo.addEventListener('click', function() {
            newTodo.classList.toggle('completed');
        });

        newTodo.appendChild(todoSpan);
        newTodo.appendChild(deleteButton);
        todoList.appendChild(newTodo);

        todoInput.value = '';
    }
});
