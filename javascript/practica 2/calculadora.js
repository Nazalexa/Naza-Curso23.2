
function calculadora (num1 = 0, num2 = 0, operacion = "*") {
  if (operacion !== "*") {
    console.log("Operación no válida, se usará multiplicación por defecto");
  }
  console.log(num1 * num2);
}

calculadora(5, 10);
calculadora(90, 40);
calculadora(10, 10);
calculadora(10, 10, "+") // Operación no válida, se usará multiplicación por defecto



/*
let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
calculadora(num1, num2);
*/