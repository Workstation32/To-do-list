const boton = document.querySelector("#boton");
const lista = document.getElementById("lista");
const item = document.querySelector("ul")

function insertar (){
    let texto = document.getElementById("texto").value;
    const li = document.createElement("li");
    let txt = document.createTextNode(texto);
    li.appendChild(txt);
    lista.insertBefore(li, lista.appendChild[0])
}

boton.addEventListener('click', insertar);


function marcar() {
    const listado = document.querySelector("li")
    listado.setAtribute('class', "marcar")

}

item.addEventListener("click",marcar)