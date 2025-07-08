
function semaforo(numero) {
  if (numero === 1)
    console.log("Rojo, detente");
  else if (numero === 2)  
    console.log("Amarillo, precaución");
  else if (numero === 3)
    console.log("Verde, avanza");
  else
    console.log("Número no válido");
}

semaforo(1);
semaforo(2);
semaforo(3);
semaforo(4);


/*
let num1 = Number(prompt("Ingrese un número del 1 al 3 para el semáforo:"));
semaforo(num1)
*/