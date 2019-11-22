function verificarDiaDaSemana(dia){
    switch(dia){
        case 1:
           return 'Hoje é domingo #PéDeCachimbo';
            break;
        case 2:
            return 'Hoje é segunda-feira #DiaDeTrabalhar';
            break;
        case 3:
            return 'Hoje é terça-feira #ForçaFocoEFé';
            break;
        case 4:
            return 'Hoje é quarta-feira #PeloMenosEstamosNaMetade';
            break;
        case 5:
            return 'Hoje é quinta-feira #FocandoNaSexta';
            break;
        case 6:
            return 'Hoje é sexta-feira #SEXTOU #SEXTOP';
            break;
        case 7:
            return 'Hoje é sábado #HojeAcordoTarde #DiaDeMaldade';
            break;
        default:
            return 'Meu bem, o código está inválido. Insira um número de 1 a 7';
    }
}

console.log(verificarDiaDaSemana(1));
console.log(verificarDiaDaSemana(6));
console.log(verificarDiaDaSemana(7));
console.log(verificarDiaDaSemana(0));