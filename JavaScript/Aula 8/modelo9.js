function verificarMes(mes){
    switch(mes){
        case 1:
            return 'O primeiro mês do ano é janeiro e possui 31 dias';
            break;
        case 2:
            return 'O segundo mês do ano é fevereiro e possui 28 dias - sem ser ano bissexto';
            break;
        case 3:
            return 'O terceiro mês do ano é março e possui 31 dias';
            break;
        case 4:
            return 'O quarto mês do ano é abril e possui 30 dias';
            break;
        case 5:
            return 'O quinto mês do ano é maio e possui 31 dias #MelhorMesDoAno';
            break;
        case 6:
            return 'O sexto mês do ano é junho e possui 30 dias';
            break;
        case 7:
            return 'O sétimo mês do ano é julho e possui 31 dias';
            break;
        case 8:
            return 'O oitavo mês do ano é agosto e possui 31 dias';
            break;
        case 9:
            return 'O nono mês do ano é setembro e possui 30 dias';
            break;
        case 10:
            return 'O décimo mês do ano é outubro e possui 31 dias';
            break;
        case 11:
            return 'O décimo primeiro mês do ano é novembro e possui 30 dias';
            break;
        case 12:
            return 'O décimo segundo mês do ano é dezembro e possui 31 dias';
            break;
        default:
            return 'Valor errado. Inserir de 1 a 12.'
    }
}

console.log(verificarMes(5));