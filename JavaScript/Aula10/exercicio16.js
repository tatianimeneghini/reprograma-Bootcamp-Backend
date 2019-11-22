let arrayN = [];
let n = 15;
let cara = 0;
let coroa = 0;

while (n > 0){
    let sorteio = Math.floor(Math.random() * 2); //Quantidade de elementos que pode gerar.
    if (sorteio == 0) {
        cara++;
    } else {
        coroa++;
    }
    n--
}

console.log("Cara: " + cara);
console.log("Coroa " + coroa);