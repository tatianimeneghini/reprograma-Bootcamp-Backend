function verificarTriangulo(angulo1, angulo2, angulo3){
    if (angulo1 + angulo2 + angulo3 == 180){
        return 'O triângulo é válido';
    } else {
        return 'O triângulo é inválido';
    }
}

console.log(verificarTriangulo(30, 50, 100));
console.log(verificarTriangulo(0, 60, 20));
