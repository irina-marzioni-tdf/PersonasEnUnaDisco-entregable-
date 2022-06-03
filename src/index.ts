//declaro las variables
let menorValor: number = 18;
let mayorValor: number = 40;
let menores21: number = 0;
let mayores21: number = 0;
let cantidadPersonas: number = 270;
let edadesPersonas: number[] = new Array(cantidadPersonas);

//funcion que me va a retornar valores aleatorios del 1 al 40, gracias a math random,
//y math floor redondea
function edadAleatoria(menorValor: number, mayorValor: number): number {
  let numRandom: number = 0;
  numRandom = Math.floor(
    Math.random() * (mayorValor - menorValor + 1) + menorValor
  );
  return numRandom;
}

//No especifica si se tiene que acionar de alguna manera el programa pero coloco todo dentro del for
//puedo guardar las edades en dos Array y despues por medio de otro for puedo saber las cantidades exactas por edad, pero tampoco especifica
//repito el for 270 veces auto accionando la funcion edadAleatoria
for (let index = 0; index < cantidadPersonas; index++) {
  edadesPersonas[index] = edadAleatoria(menorValor, mayorValor);
}

for (let index = 0; index < cantidadPersonas; index++) {
  if (edadesPersonas[index] > 21) {
    mayores21 += 1;
  } else {
    menores21 += 1;
  }
}

//imprimo por consola los resultado
console.log("Personas Mayores de 21 años en la disco: ", mayores21);
console.log("personas Menores o con 21 años en la disco: ", menores21);
console.log("Personas Total en la disco: ", menores21 + mayores21);
