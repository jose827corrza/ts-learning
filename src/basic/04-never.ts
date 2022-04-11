//Lo que hace es detectar cuando un pedazo de codigo va a hacer que el codigo no siga o que simpemente termine ahi mismo

const withOutEnd = () => {
  while(true){
    console.log('Never stop learning');

  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === "string"){
    return ' es un string';

  }else if(Array.isArray(input)){
    return 'es un array';

  }
  return fail('No es ninguno');
}

console.log(example('jose'));
console.log(example([1,2,3]));
console.log(example(123));// Aca se detiene el programa
console.log(example('despues del error'));
