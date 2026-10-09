const columnaPendientes = document.getElementById("lista-tareas");

function agregarNuevaTarea() {
    
    const nuevaTarjeta = document.createElement("div");
    

    nuevaTarjeta.classList.add("tarjeta-tarea");
    
    // PASO C: Inyectar el HTML por dentro (Usamos backticks ` ` para poder escribir en varias líneas)
    // Nota: Aquí pegarás exactamente el mismo HTML interno que hiciste en tu Micro-Reto anterior
    nuevaTarjeta.innerHTML = `
        <h3>Aprender el DOM</h3>
        <p>Prioridad: <span class="prioridad-alta">ALTA</span></p>
        <p><strong>Responsable:</strong> Juan Felipe</p>
        <p><small>Creado hoy</small></p>
    `;
    
    // PASO D: Enganchar la tarjeta recién creada a nuestra columna en la pantalla
    columnaPendientes.appendChild(nuevaTarjeta);
}

agregarNuevaTarea();