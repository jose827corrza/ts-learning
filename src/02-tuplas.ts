//Asise haria normalmente un array, aca le permitiria ingresar cuantos quira, y en el orden que quiera los tipos
const products: (string | number)[] = ['jose', 1, 2, 'maria'];

let userTupla: [string, number, boolean];

userTupla = ['jose', 25, true];

//Todos estos estarian mal, se puede ver que solo permite el orden y la cantidad de elementos en el array
// userTupla = [];
// userTupla = ['jose'];
// userTupla = ['jose', 25, true, 25];


//Descructuring...

let [nombre, edad] = userTupla;
