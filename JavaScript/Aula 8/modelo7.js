function maiorOuMenor(numero1, numero2){
    if (numero1 > numero2){
        return 'O ' + numero1 + ' é maior que o ' + numero2;
    } else if (numero1 === numero2){
        return 'Os números são iguais';
    } else if (numero1 < numero2){
        return 'O ' + numero2 + ' é maior que o ' + numero1;
    } else {
        return 'Ocorreu um erro. Verificar números inseridos inteiros'
    }
}

console.log(maiorOuMenor(5, 1));
console.log(maiorOuMenor(0, 100));
console.log(maiorOuMenor(1/3, 0.3333333333333333));
