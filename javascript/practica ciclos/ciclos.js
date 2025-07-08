/*
  Ejercicios para practicar en clases
  1. Segun el siguiente array de numeros, crea un bucle que imprima cada número multiplicado por 2.
  - [1, 2, 3, 4, 5]
  2. Según el siguiente objeto
    {
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    }
  Imprime todas las verduras.
  3. Según el objeto anterior, imprime todas las verduras, frutas y carnes.
*/


let array = [1, 2, 3, 4, 5]
  for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 2); // Imprime cada número multiplicado por 2
}


let alimentos = { 
  verduras: ["lechuga", "pepino", "cebolla"],
  frutas: ["manzana", "mazorca", "tomate"],
  carnes: ["pollo", "res", "cerdo"]
};

for (let i = 0; i < alimentos.verduras.length; i++) {
  console.log(alimentos.verduras[i]); //
}

for (let propiedad in alimentos) {
  console.log(propiedad + ": " + alimentos[propiedad])
}