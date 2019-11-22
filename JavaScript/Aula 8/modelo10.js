function descobrirLetra(letra){
    switch(letra){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A letra ' + letra + 'é vogal';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            return 'A letra ' + letra + 'é consoante';
            break;
        default: 
            return 'Valor foi inserido errado';
    }
}

console.log(descobrirLetra('a'));
console.log(descobrirLetra('z'));
console.log(descobrirLetra(4));

/*Dá pra inserir como if para receber somente string
ou inserir o case de vogal e as consoantes serem inseridas em default
*/