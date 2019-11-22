let numero = 29;
let divisores = 0;

for(let i = 1; i <= numero; i++){
    if (numero % i === 0){
        divisores++;
    }
}

if(divisores === 2){
    console.log(numero + " é primo");
} else {
    console(numero + " não é primo");
}