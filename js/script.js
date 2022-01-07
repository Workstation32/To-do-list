const boton = document.querySelector("#boton");
const lista = document.getElementById("lista");

console.log(texto)

function insertar (){
    let texto = document.getElementById("texto").value;
    const li = document.createElement("li");
    let txt = document.createTextNode(texto);
    li.appendChild(txt);
    lista.insertBefore(li, lista.appendChild[0])
}

boton.addEventListener('click', insertar);

