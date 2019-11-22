// Escreva uma função chamada credencialEhValida.
// Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver mais do que 3 caracteres 
//e a senha, pelo menos 8 caracteres. Caso contrário, retorna false.

// Exemplo:
// console.log(credencialEhValida('Xuxu', 'minhasenha'));

function credencialEhValida(nome, senha){
    if(nome < 3){
        return false;
    } else {
        return true;
    } if(senha < 8){
        return false; 
    }
}