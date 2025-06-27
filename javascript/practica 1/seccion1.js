let Numero1 = Number( prompt("Ingrese Numero 1 "));
let Numero2 = Number(prompt("Ingrese Numero 2 "));
let resultado;

let operacion = prompt("Ingrese la operacion a realizar: [+, -, *, /]");
if (operacion === "+")
  {
    resultado = Numero1+Numero2;
  }
  else if (operacion === "-")
  {
    resultado = Numero1-Numero2;
  }
  else if (operacion === "*")
  {
    resultado = Numero1*Numero2; 
  }
  else if(operacion === "/")
  {
    resultado = Numero1/Numero2
  }
  else
  {
    resultado = "Operacion no valida";
  }

alert(resultado.toFixed(1));


