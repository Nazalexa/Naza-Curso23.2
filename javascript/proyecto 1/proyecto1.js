/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.

  2. Según el siguiente array de objetos
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
  las personas que sean mayores de 25 años.

  Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres

  Fecha de entrega: 11/07/25

*/

let palabras = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];
  function filtra_palabras(texto){   
    texto = texto.toLowerCase().trim();
    let textocensurado = texto;
    palabras.forEach(palabra => {
      textocensurado = textocensurado.replace(palabra, "****");
    });
    return textocensurado;
    }

console.log(filtra_palabras("De verdad, que tonto eres, chispas!"));
console.log(filtra_palabras("Que inteligente eres, genial!"));
console.log(filtra_palabras("Hola, que recorcholis eres, caracoles!"));
console.log(filtra_palabras("Por favor, no digas rayos ni cielos!"));
console.log(filtra_palabras("Esta es una prueba sin malas palabras."));


var personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
];
function filtra_edad(personas) {
    return personas.filter(persona => persona.edad > 25);  
  }
function filtra_espana_hombres(personas) {
    return personas.filter(persona => persona.pais === "España" && persona.sexo === "masculino");
}

console.log(filtra_edad(personas));
console.log(filtra_espana_hombres(personas));