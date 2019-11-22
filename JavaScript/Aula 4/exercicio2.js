//Função verificar palíndromo
function verificarPalindromo(palavra){
    let palavraRevertida = palavra.toString().split('').reverse().join('');
	if (palavra == palavraRevertida){
		return "É um Palíndromo";
      } else {
		return "Não é um Palíndromo";
      } 
}

let palavra = prompt("Digite uma palavra e te " +
                     "direi se é um palíndromo: ");
console.log(verificarPalindromo(palavra));