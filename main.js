// const todoForm = document.querySelector('.form');
// const todoInput = document.querySelector('.input');
// const todoList = document.querySelector('.list');

// todoForm.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     const inputValue = todoInput.value;
//     const newItem = document.createElement('li');
//     const todoCheckbox = document.createElement('input');
//     const todoEdit = document.createElement('button');
    
//     todoEdit.textContent = "Edit";
//     todoCheckbox.type = "checkbox";

//     newItem.className = "item";

//     const userName = document.createElement('h2')
//     userName.textContent = inputValue;
//     newItem.append(userName);

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.className = 'delete-btn';
//     deleteButton.addEventListener('click', () => {
//         newItem.remove();
//     });
//     newItem.append( todoCheckbox,userName,todoEdit,deleteButton);

//     todoList.append(newItem);
//     todoInput.value = '';
// });


const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('.input');
const todoList = document.querySelector('.list');

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputValue = todoInput.value;
    const newItem = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    const todoEdit = document.createElement('button');
    
    todoEdit.textContent = "Edit";
    todoCheckbox.type = "checkbox";

    newItem.className = "item";

    const userName = document.createElement('h2')
    userName.textContent = inputValue;
    newItem.append(userName);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        newItem.remove();
    });

    todoEdit.addEventListener('click', () => {
        // Создаем текстовое поле для редактирования
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = userName.textContent;

        // Создаем кнопку для сохранения изменений
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', () => {
            userName.textContent = editInput.value;
            newItem.replaceChild(userName, editInput);
            newItem.replaceChild(todoEdit, saveButton);
        });

        newItem.replaceChild(editInput, userName);
        newItem.replaceChild(saveButton, todoEdit);
    });

    newItem.append(todoCheckbox, userName, todoEdit, deleteButton);
    todoList.append(newItem);
    todoInput.value = '';
});
