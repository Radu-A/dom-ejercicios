
// Ejercicio 1: Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML

const toDoList = ["Jugar al pádel", "Peinar gatitos", "Tener una crisis de existencia", "Salir a comprar"]

const lista = document.querySelector("#milista");
const elemento = document.createElement("li");
elemento.innerHTML = "Lo que quieras";

lista.appendChild(elemento);

const li = document.createElement("li")
li.innerHTML = "Otro LI"

lista.appendChild(li);

// Ejercicio 2: Hacer un boton que esconda/enseñe el texto de un 
// parrafo cada vez que se pulsa el mismo boton. 
// Por defecto, el párrafo debe estar visible

const btn = document.getElementById("btn");
const parrafo = document.getElementById("parrafo");
btn.addEventListener("click", () => {
  parrafo.classList.toggle("esconder");
});

// Ejercicio 3: Hacer que con onmouseover y onmouseout, 
// se muestre/esconda el título de una foto cuando 
// pases el raton sobre dicha foto

const img = document.querySelector("figure img")
const caption = document.querySelector("figure figcaption")
caption.style.display = "none";
img.addEventListener("mouseover", () => {
    caption.style.display = "inline"
})

img.addEventListener("mouseout", () => {
    caption.style.display = "none"
})

/*Ejercicio 1 bis:
Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado
["comprar","barrer","alimentar gato","colada"]*/

//toDoList

for (let i = 0; i < toDoList.length; i++) {
    let nuevo = document.createElement('li');
    nuevo.innerHTML = toDoList[i];
    lista.appendChild(nuevo);
}
 
