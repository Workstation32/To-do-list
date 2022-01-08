document.addEventListener("DOMContentLoaded", () => {
  let tareas = [];

  const contenedor_Tareas = document.querySelector("#contenedorTareas"),
    btn_Guardar_Tarea = document.querySelector("#btnAgregarTarea"),
    Nueva_Tarea = document.querySelector("#NuevaTarea");

  // Clic del botón para agregar nueva tarea
  btn_Guardar_Tarea.onclick = () => {
    const tarea = Nueva_Tarea.value;
    if (!tarea) {
      return;
    }
    tareas.push({
      tarea: tarea,
      terminada: false,
    });

    refrescarListaDeTareas();
  };

  // Definir función que refresca la lista de tareas a partir del arreglo global
  const refrescarListaDeTareas = () => {
    contenedor_Tareas.innerHTML = "";
    for (const [indice, tarea] of tareas.entries()) {
      // Crear el enlace para eliminar la tarea
      const eliminar = document.createElement("a");
      eliminar.classList.add("enlace-eliminar");
      eliminar.innerHTML = "&times;";
      eliminar.href = "";
      eliminar.onclick = (evento) => {
        evento.preventDefault();

        if (!confirm("¿Eliminar tarea?")) {
          return;
        }
        tareas.splice(indice, 1);
        refrescarListaDeTareas();
      };
      // El input para marcar la tarea como terminada
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onchange = function () {
        if (this.checked) {
          tareas[indice].terminada = true;
        } else {
          tareas[indice].terminada = false;
        }

        refrescarListaDeTareas();
      };

      // El span que llevará el contenido de la tarea
      const span = document.createElement("span");
      span.textContent = tarea.tarea;
      // Y finalmente el elemento de la lista
      const li = document.createElement("li");

      // Verificamos si la tarea está marcada para marcar los elementos
      if (tarea.terminada) {
        checkbox.checked = true;
        span.classList.add("tachado");
      }
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(eliminar);
      contenedor_Tareas.appendChild(li);
    }
  };
});

function marcar() {
  const listado = document.querySelector("li");
  listado.setAtribute("class", "marcar");
}

item.addEventListener("click", marcar);
