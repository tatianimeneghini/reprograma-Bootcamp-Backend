//Calcular batida cardíaca por dia (bpm)
function batidaCardiacaPorDia(bpm){
  console.log("Seu coração bate " + (bpm * (60 * 24)) + " por dia");
  return bpm * (60 * 24);
}

batidaCardiacaPorDia(70);