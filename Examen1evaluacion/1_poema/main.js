/* Ejercicio 1 [0.5 puntos] */

/* Dado el siguiente texto */

/* [0.5] Mostrar en consola las palabras en minúscula, separadas por comas y al final terminado en punto. */

let poema = `Verde que te quiero verde.
Verde viento. Verdes ramas.
El barco sobre la mar
y el caballo en la montaña.
Con la sombra en la cintura,
ella sueña en su baranda,
verde carne, pelo verde,
con los ojos de fría plata.
Verde que te quiero verde.
Bajo la luna gitana,
las cosas la están mirando
y ella no puede mirarlas.`;

let nuevoPoema = (cadena) => {
  let poemaNuevo = cadena.split(" ").join(",").toLocaleLowerCase();
  return poemaNuevo;
};

console.log(nuevoPoema(poema));

let div = document.createElement("div");
let textoPoema = document.createTextNode(nuevoPoema(poema));
div.appendChild(textoPoema);

let cuerpoDocumento = document.getElementsByTagName("body")[0];
cuerpoDocumento.appendChild(div);
console.log(cuerpoDocumento);
