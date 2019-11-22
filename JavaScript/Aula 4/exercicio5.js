//Função verificar item adquitido (usando <switch>)
function verificarItemAdquirido(item){
switch(item){
  case '1':
    console.log('Alimento não-perecível');
    break;
  case '2':
  case '3':
  case '4':
    console.log('Alimento perecível');
    break;
  default:
	console.log('Código inválido!');
  }
}

let item = prompt('Digite o código do seu produto e iremos verificar qual é seu item: ');
verificarItemAdquirido(item);