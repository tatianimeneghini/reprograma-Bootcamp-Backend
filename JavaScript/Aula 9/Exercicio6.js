let arrayNumeros = [5,4,7,8,64,90];
let maximo = 0;

for (let i = 0; arrayNumeros.length > i; i++){
    console.log(arrayNumeros[i]);
    if (maximo < arrayNumeros[i]){ 
        maximo = arrayNumeros[i];
    }
}

console.log("O número máximo do array é " + maximo);