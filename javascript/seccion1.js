//Esto es un comentario de una línea
/*
  Comentario de multiples
  líneas
*/

//Variables
/*
  Las variables son espacios de memoria que almacenan un valor.
*/

// Declaración de una variable
let nombre = "Juan"; // Variable de tipo string
console.log(nombre); // Imprime "Juan"
nombre = "Pedro";
console.log(nombre); // Imprime "Juan"

// Tipos de datos
let number = 42; // Número
let float = 3.14; // Número de punto flotante
let string = "Hola, mundo"; // Cadena de texto
let boolean = true; // Booleano (true/false)
let array = [1, 2, 3]; // Array (lista)
console.log(array); // Imprime [1, 2, 3]
console.log(array); // Imprime ["pera", "manzana", "uva"]
console.log(array[3]); // Imprime "pera" (primer elemento del array) // Las posiciones de los elementos se cuentan desde 0
// [] Sirven como selectores. 
let nulo = null; // Nulo (sin valor)
let indefinido = undefined; // Indefinido (sin asignar)
let objeto = { nombre: "Juan", edad: 30 }; // Objeto
console.log(objeto); // Imprime { nombre: "Juan", edad: 30 }
console.log(objeto.nombre); // Imprime "Juan" (acceso a una propiedad del objeto)

let suma = 5 + 3; // Suma
let resta = "10" - 2; // Resta
let resta = "10" - "2"; // Resta
let resta = "a10" + "2"; // Resta
let suma_string = "a10232!.;--''''-" + "2"; // Resta ()


//Practica
let prueba = "Pedro";
prueba = 23;
prueba = [1,2,3]
console.log(prueba)