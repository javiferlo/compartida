/* Ejercicio 4 [3 puntos] */

/*
Crear un objeto bombo que tendrá las bolas del bombo y las bolas extraidas en un bingo.
El número de bolas es 90.
Implementar los métodos:
- inicializar: Rellena el bombo con 90 bolas (no están ordenadas)
- extraerBola: Saca una bola del bombo y la pone en bolas extraidas.
- mostrarBolas: Muestra en la web las bolas en el bombo.
- mostrarBolasExtraidas: Muestra en la web las bolas extraidas.
- cantidadBolasEnBombo: Devuelve la cantidad de bolas en el bombo.
- cantidadBolasExtraidas: Devuelve la cantidad de bolas extraidas.

Se le pedirá al usuario que introduzca el número de bolas a extraer.
Se mostrará en pantalla la cantidad de bolas en el bombo.
Se mostrará en pantalla las bolas en el bombo.
Se mostrará en pantalla la cantidad de bolas extraídas.
Se mostrará en pantalla las bolas extraídas.
*/

/* [0,25] Crear una función que compruebe que el número de bolas a extraer que quiere el usuario.
Se comprobará que ha introducido un valor, 
que el valor introducido es del tipo correcto,
el número mínimo de bolas es 1 y el máximo 90. */

bolasExtraer = null;
while (bolasExtraer === null) {
  let cantidad = prompt("Número de bolas para extraer:");

  if (!isNaN(cantidad)) {
    if (cantidad >= 1 && cantidad <= 90) {
      console.log("Número válido");
      bolasExtraer = cantidad;
    } else {
      console.log("El número debe estar en el rango del 1 al 90");
    }
  } else {
    console.log("Dato no válido");
  }
}

/* Crear el objeto bombo con sus atributos y métodos.
- [1] inicializar: Rellena el bombo con 90 bolas (no están ordenadas)

- [0.5] extraerBola: Saca una bola del bombo y la pone en bolas extraidas.
- [0.25] mostrarBolas: Muestra en la web las bolas en el bombo.
- [0.25] mostrarBolasExtraidas: Muestra en la web las bolas extraidas.
- [0.25] cantidadBolasEnBombo: Devuelve la cantidad de bolas en el bombo.
- [0.25] cantidadBolasExtraidas: Devuelve la cantidad de bolas extraidas.
 */

let bombo = [];
while (bombo.length < 90) {
  let numeroAleatorio = Math.floor(Math.random() * 90);
  if (!bombo.includes(numeroAleatorio)) {
    bombo.push(numeroAleatorio);
  }
}

console.log(bombo);

// [0.25] Pedir al usuario que introduzca el número de bolas a extraer.
// Mostrar en pantalla la cantidad de bolas en el bombo.
// Mostrar en pantalla las bolas en el bombo.
// Mostrar en pantalla la cantidad de bolas extraídas.
// Mostrar en pantalla las bolas extraídas.

bolasExtraidas = [];
for (let index = 0; index < bolasExtraer; index++) {
  bolasExtraidas.push(bombo[index]);
}

console.log("%c" + bolasExtraidas, "color:green");
