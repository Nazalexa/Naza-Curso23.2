// Ejercicios de strings
/*
  1. Crea una función que reciba un string pero retorne cuantas palabras tiene.
  2. Crea una función que reciba un string y cuente cuantas vocales tiene
  3. Crea una función que reciba un string y retorne el string al revés.
  4. Crea una función que reciba un string y retorne si este es un palíndromo o no.

*/


let string = "Esta es una cadena de testo para practicar los métodos de string";
function contadorpalabras(string) {
  return string.split(' ').length;
}
console.log(contadorpalabras(string));

let texto = "Esta es una cadena de testo para practicar los métodos de string";
function contarvocales(vol) {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vol.split("").filter(char => vocales.includes(char)).length;
}

console.log(contarvocales(texto));

let reves = "Esta es una cadena de testo para practicar los métodos de string";
const textoInvertido = reves.split('').reverse().join('');

console.log(textoInvertido);

let prueba = "Reconocer";
function palindromo(texto) {  
  const  textonormal = texto.toLowerCase().replace(/[^a-z]/g,'');
  return textonormal === textonormal.split('').reverse().join('');
}

console.log(palindromo(prueba));