function calcularBaskara(a, b, c) {;
	let delta = (b**2) - (4*a*c);
    console.log("O valor de x1 é " + x1 + " e o valor de x2 é " + x2);
    if (delta < 0){
        return 'A equação não tem raiz';
    } else if (delta ==0){
        return 'Equação possui uma raiz';
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return 'Equação possui duas raizes';
    }
}

console.log(calcularBaskara(1, 5, 4));
console.log(calcularBaskara(90, 3, 6));
console.log(calcularBaskara(1, 0, 0));