//Função verificar produto (usando <switch>)
function verificarProduto(produto){
switch(produto){
  case '1':
    console.log('Alimento não-perecível');
    break;
  case '2':
  case '3':
  case '4':
    console.log('Alimento perecível');
    break;
  case '5':
  case '6':
    console.log('Vestuário');
    break;
  case '7':
    console.log('Higiene Pessoal');
    break;
  case '8':
  case '9':
  case '10':
  case '11':
  case '12': 
  case '13': 
  case '14':
  case '15':
    console.log('Limpeza e Utensílios Domésticos');
    break;
  default:
	console.log('Código inválido. Digite novamente!');
  }
}

let produto = prompt('Digite um número de 1 a 15');
verificarProduto(produto);