const columnaPendientes = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("input-tarea");
const botonAgregar = document.getElementById("btn-agregar");

function agregarNuevaTarea(textoDeLaTarea) {
    
const nuevaTarjeta = document.createElement("div");
nuevaTarjeta.classList.add("tarjeta-tarea");
    
    nuevaTarjeta.innerHTML = `
        <h3>${textoDeLaTarea}</h3>
        <p>Prioridad: <span class="prioridad-alta">ALTA</span></p>
        <p><strong>Responsable:</strong> Juan Felipe</p>
        <p><small>Creado hoy</small></p>
        <button class="btn-eliminar">Eliminar 🗑️</button>
    `;

    const botonEliminar = nuevaTarjeta.querySelector(".btn-eliminar");
    botonEliminar.addEventListener("click", function() {
    nuevaTarjeta.remove();
    });
    
    columnaPendientes.appendChild(nuevaTarjeta);
}

botonAgregar.addEventListener("click", function() {
    const textoUsuario = inputTarea.value;
    if (textoUsuario === "") {
        alert("¡Por favor, escribe una tarea antes de agregarla!");
        return;
    }
    
    agregarNuevaTarea(textoUsuario);
    inputTarea.value = "";
});

inputTarea.addEventListener("keydown", function(evento) {
    console.log("Acabas de presionar la tecla: " + evento.key);
    if (evento.key === "Enter") {
        evento.preventDefault();
        botonAgregar.click();
    }
});



