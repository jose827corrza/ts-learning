//jose => [j,o,s,e] ---> string => string[]
//[j,o,s,e] => jose ---> string[] => string


//A esto se le llama sobrecarga de funciones, y consiste en definir posibles modos en los que la funcion tendria entradas
//en base a que tipo es su parametro de entrada.
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: string | string[]): unknown{
  if(Array.isArray(input)){
    return input.join('');
  }else{
    return input.split('');
  }
};

const rtaToArray = parseStr('josesito');
console.log("vania str y sale array: ",rtaToArray);
const rtaToStr =parseStr(['j','o','s','e']);
console.log("venia en array y str es:",rtaToStr);
//El principal inconveniente con esta sobrecarga en funciones, es que hasta que no se haga una validacion, ts va
//a decir que no puede acceder a los metodos propios de los tipos,
//osea.. que deberia uno tener que encapsular en un if,y ahi si poder usar digamos un..
//.toLocaleLoweCase() para un string
