//Função inverter número
function inverterNumero(numero){
  return numero.split("").reverse().join("");
}

console.log(inverterNumero("1234"));

/*OR
function inverterNumero(numero){
  return numero.toString().split("").reverse().join("");
}

console.log(inverterNumero(1234));
*/