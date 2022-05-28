//declaro las variables
let menorValor: number = 18;
let mayorValor: number = 40;
let menores21: number = 0;
let mayores21: number = 0;
let edadesPermitidas: number = 0;

//funcion que me va a retornar valores aleatorios del 1 al 40, gracias a math random,
//y math floor redondea
function edadAleatoria(menorValor: number, mayorValor: number): number {
  let numRandom: number = 0;
  numRandom = Math.floor(Math.random() * 41);
  //verifico los valores
  console.log(numRandom);
  //tomo el valor si se cumplen las dos a la vez, en caso contrario es menor que 18
  if (menorValor <= numRandom && mayorValor >= numRandom) {
    edadesPermitidas = numRandom;
  }
  //verifico el valor tomado
  console.log("edad aleatoria tomada:", edadesPermitidas);
  return edadesPermitidas;
}

//No especifica si se tiene que acionar de alguna manera el programa pero coloco todo dentro del for
//puedo guardar las edades en dos Array y despues por medio de otro for puedo saber las cantidades exactas por edad, pero tampoco especifica
//repito el for 270 veces auto accionando la funcion edadAleatoria
for (let control = 0; control < 270; control++) {
  edadesPermitidas = edadAleatoria(menorValor, mayorValor);
  if (edadesPermitidas > 21) {
    mayores21 += 1;
  } else menores21 += 1;
}

//imprimo por consola los resultado
console.log("Personas Mayores de 21 años en la disco: ", mayores21);
console.log("personas Menores o con 21 años en la disco: ", menores21);
console.log("Personas Total en la disco: ", menores21 + mayores21);
