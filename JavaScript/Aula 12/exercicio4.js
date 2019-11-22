const gato = ["nome", "cores", "signo", "gostos"];

const xuxu = {
    nome: "Xuxu",
    cores: ["marrom", "preto", "branco"],
    signo: "gemeos",
    gostos: ["morder", "miar", "correr"]
};

const luna = {
    nome: "Luna",
    cores: ["marrom", "bege", "preto"],
    signo: "touro",
    gostos: ["caçar", "correr", "dormir"]
};

const gatos = [xuxu, luna];
const cores = [''];

for (let gato of gatos) {
    console.log(gato.nome)
    for (let cor of gato.cores){
        console.log(cor)
    }
    console.log('**********')
}
/*for (let cor in gatos){
    console.log(cor, xuxu[cor])
}
*/;, 