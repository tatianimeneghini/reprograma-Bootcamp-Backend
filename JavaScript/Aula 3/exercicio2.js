//Função para inverter palavra
function inverterPalavra(palavra){
	return palavra.toString().split("").sort().join("");
}

console.log(inverterPalavra("quadrilatero"));
