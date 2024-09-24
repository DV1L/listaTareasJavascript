function agregarTarea() {

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no esté vacío
    if (nuevaTareaTexto == "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function() {nuevaTarea.remove();}

    //Agregar el botón eliminar al elemento de la lista
    nuevaTarea.appendChild(btnEliminar);

    //Agregar la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto
    document.getElementById("nuevaTarea").value = "";
}