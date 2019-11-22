//Calcular batida cardíada por dias vividos (bpm)
function calcularDiasVividos (idade){
  console.log("Você viveu " + (idade*365) + " dias");
  return idade * 365;
}

function batidaCardiacaPorDia(bpm){
  console.log("Seu coração bate " + (bpm * (60 * 24)) + " por dia");
  return bpm * (60 * 24);
}

function bpmDaVida (idade, bpm){
  console.log("Seu coração bateu " + ((idade * 365) * (bpm * (60 * 24))) + " vezes. Parabéns!")
  return (idade * 365) * (bpm * (60 * 24))
}

calcularDiasVividos(28);
batidaCardiacaPorDia(70);
bpmDaVida(28, 70);