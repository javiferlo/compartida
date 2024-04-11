/* Ejercicio 5 [3 puntos] */

/* Dados los siguientes array de letras, números y caracteres especiales */
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracteresEspeciales = ["!", "#", "$", "&", "@", "_", "-", "(", "=", "?"];

/* Nota: los passwords se mostrarán por consola */

/* [1] Crea una función para generar un password débil:
  - Compuesta por 5 letras y 3 números.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
*/

function passDebil() {
  let passDevil = [];
  while (passDevil.length < 5) {
    let Irandom = Math.floor(Math.random() * letras.length);
    let Crandom = letras[Irandom];
    passDevil.push(Crandom);
  }
  while (passDevil.length < 8) {
    let Irandom = Math.floor(Math.random() * numeros.length);
    let Crandom = numeros[Irandom];
    passDevil.push(Crandom);
  }
  passDevil.sort(() => Math.random() - 0.5);
  return passDevil.join("");
}

console.log(passDebil());

/* [1.5] Crea una función para generar un password fuerte: 

  - Compuesta por 6 letras, 4 números y 3 caracteres especiales.
  - Se utilizarán los arrays definidos en el programa principal.
  - Tanto la posición como el valor se obtendrán de forma aleatoria.
  - En la primera posición aparecerá un carácter especial, 
    la primera letra generada debe ser obligatoriamente mayúscula,
    el resto minúsculas 
    y ningún valor se podrá repetir.
*/

function passFuerte() {
  let passFuerte = [];
  passFuerte.push(
    letras[Math.floor(Math.random() * letras.length)].toUpperCase()
  );
  while (passFuerte.length < 6) {
    cRandom = letras[Math.floor(Math.random() * letras.length)];
    if (!passFuerte.includes(cRandom)) {
      passFuerte.push(cRandom.toLowerCase());
    }
  }
  while (passFuerte.length < 10) {
    cRandom = numeros[Math.floor(Math.random() * numeros.length)];
    if (!passFuerte.includes(cRandom)) {
      passFuerte.push(cRandom);
    }
  }
  while (passFuerte.length < 12) {
    cRandom =
      caracteresEspeciales[
        Math.floor(Math.random() * caracteresEspeciales.length)
      ];
    if (!passFuerte.includes(cRandom)) {
      passFuerte.push(cRandom);
    }
  }
  passFuerte.sort(() => 0.5 - Math.random());
  while (passFuerte.length < 13) {
    cRandom =
      caracteresEspeciales[
        Math.floor(Math.random() * caracteresEspeciales.length)
      ];
    if (!passFuerte.includes(cRandom)) {
      passFuerte.splice(0, 0, cRandom);
    }
  }
  return passFuerte.join("");
}

console.log(passFuerte());

/* [0.5] Pedir al usuario la que elija una opción,
   comprobar que la opción es correcta y si no lo es advertirle,
   repetir hasta que elija terminar */

let opcion;
while (opcion == null) {
  let input = prompt(
    "Elija A(para un contraseña debil), B(para una contraseña fuerte)"
  );
  if (input == "a") {
    opcion = "a";
    console.log("Contraseña Fuerte: ");
    console.log(passFuerte());
  } else if (input == "b") {
    opcion = "b";
    console.log("Contraseña Debil: ");
    console.log(passDebil());
  } else {
    console.log("opcion no valida.");
  }
}
