"use strict";


// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;





const section = document.querySelector("section");
// innerHTML reemplaza todo el contenido HTML de ese elemento,
// todos los hijos, por lo que si habia código HTML se perderá
// y reemplazará por el nuevo.
// Es recomendable no invocar innerHTML muchas veces ya que
// no es muy performante
section.innerHTML = accumulator;
console.log(accumulator)

// ----------------------------------------------------
/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/
const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", function () {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  });

  post.addEventListener("mouseout", function () {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  });
}
