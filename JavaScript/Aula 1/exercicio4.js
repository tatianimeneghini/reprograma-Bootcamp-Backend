//Calcular Báskara
function CalcularBaskara(a, b, c) {;
	let delta = (b**2) - (4*a*c);
	console.log("O valor de delta é " + delta);
	let x1 = (-b + Math.sqrt(delta)) / (2*a);
	let x2 = (-b - Math.sqrt(delta)) / (2*a);
	console.log("O valor de x1 é " + x1 + " e o valor de x2 é " + x2);
}

CalcularBaskara(1, 5, 4);