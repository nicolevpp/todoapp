const taskInput = document.querySelector('#add-task');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');
const taskAdded = document.getElementsByClassName('task-added');
const allCounter = document.querySelector('.total-count');
const pendingCounter = document.querySelector('.pending-count');
const completedCounter = document.querySelector('.completed-count');

//Contadores

const completedTask = document.getElementsByClassName('completed');
const allTask = document.getElementsByClassName('task-added');
const pendingTask = document.getElementsByClassName('pending');

function actualizarContador() {
    allCounter.innerHTML= `${allTask.length}`;

    pendingCounter.innerHTML= `${pendingTask.length}`;

    completedCounter.innerHTML= `${completedTask.length}`;
};
actualizarContador();

// Creacion de tareas

form.addEventListener('submit', e => {
    e.preventDefault();
    //Crear tarea
    const li = document.createElement('li');
    // Creo contenido del li de la tarea añadida
    li.innerHTML = `
    <p class="task-added pending">${taskInput.value}</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    `;
    // Agrego el elemento a la lista
    list.append(li);
    // Limpio el input de crear tarea
    taskInput.value = '';
    // Guardar en localstorage (navegador)
    localStorage.setItem('listaTareas', list.innerHTML);
    actualizarContador();
});

// Eliminar y completar tarea

list.addEventListener('click', e => {
    if (e.target.closest('.delete-icon')) {
        e.target.closest('.delete-icon').parentElement.remove();
        localStorage.setItem('listaTareas', list.innerHTML);
        actualizarContador();
    }
    if (e.target.closest('.check-icon')) {
        // 1. Selecciono el icono de editar
        const checkIcon = e.target.closest('.check-icon');
        const checkTask = checkIcon.parentElement.children[0];
        actualizarContador();

        if (checkIcon.classList.contains('completado')) {
            checkIcon.classList.remove('completado');
            checkTask.classList.remove('completed');
            checkTask.classList.add('pending');
            localStorage.setItem('listaTareas', list.innerHTML);
            actualizarContador();
        } else {
            checkIcon.classList.add('completado');
            checkTask.classList.add('completed');
            checkTask.classList.remove('pending');
            localStorage.setItem('listaTareas', list.innerHTML);
            actualizarContador();
        }
    };
});






(() => {
    const localList = localStorage.getItem('listaTareas'); //Para obtener de localstorage
    list.innerHTML = localList;
    actualizarContador();
})();







