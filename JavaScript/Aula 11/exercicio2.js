const arrayExemplo = [2, 5, 7, 9, "xuxu", 3, 6, 8, 11];

for (let i = 0; i<arrayExemplo.length; i++){
    let posicao = arrayExemplo.indexOf("xuxu");
    if ("xuxu" == arrayExemplo[i]){
        console.log(posicao);
    }
}