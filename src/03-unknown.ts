//ES UNA MEJOR OPCION QUE USAR ANY

//este tipo nos obliga a primero confirmar que tipo es..

let unknownVar: unknown;

//Aqui obliga aprimero saber el tipo para ahi si tener autocompletado y todo eso...
//unknownVar.lower();

if(typeof unknownVar === 'string'){
  unknownVar.toLocaleLowerCase();
  //Aqui si me autocompleta, y ademas ya no deja error.
}

//En pocas palabras este tipo hace que se tenga que serciorar antes de usar la variable, que tipo tiene.
