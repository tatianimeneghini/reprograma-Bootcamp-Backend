//Função para retornar iniciais do nome
function retornarIniciais(nomeCompleto){
	let nome = nomeCompleto.substring(0,1);
    let espaco = nomeCompleto.indexOf(" "); //7
  console.log(espaco);
    let sobrenome = nomeCompleto.substring(8,9);
    return  nome + sobrenome;
  
}

console.log(retornarIniciais("Tatiani Meneghini"));


/* OR
function retornarIniciais(nomeCompleto){
	let nome = nomeCompleto.substr(0,1);
    let espaco = nomeCompleto.indexOf(" "); //7
  console.log(espaco);
    let sobrenome = nomeCompleto.substr(espaco+1,1);
    return  nome + sobrenome;
  
}

let nomeUsuario = prompt("Insira seu nome completo: ")

console.log(retornarIniciais(nomeUsuario));
*/
