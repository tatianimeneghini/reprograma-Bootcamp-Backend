function calcularFuncao(angulo){
  if (angulo > 0 && angulo < 90) {
      return 'O ângulo é agudo';
    } else if (angulo == 90){
      return 'O ângulo é reto';
    } else if (angulo > 90 && angulo < 180){
      return 'O ângulo é obtuso';
    } else if (angulo == 0 || angulo == 180){
      return 'O ângulo é raso';
    } else if (angulo >= 181 && angulo <= 359){
      return 'O ângulo é côncavo';
    } else if (angulo === 360){
      return 'O ângulo é completo';
    } else {
    return 'Valor inválido!'}
}
  

/*let angulo = parseInt(prompt('Digite o ângulo: '));
*/
console.log(calcularFuncao(angulo));