//Cacular delta
function calcularDelta(a, b, c) {;
	let delta = (b**2) - (4*a*c);
    console.log("O valor de delta é " + delta);
    return delta;
}
function calcularX1(a, b, delta) {;
	let x1 = (-b - Math.sqrt(delta)) / (2*a);
	console.log(x1);
    return x1
}
function calcularX2(a, b, delta) {;
	let x2 = (-b + Math.sqrt(delta)) / (2*a);
	console.log(x2);
    return x2
}

calcularDelta(1, 5, 4);
calcularX1(25, 49, 9);
calcularX2(5, 36, 81);