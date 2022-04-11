const createProduct = (
  id: string,
  isNew: boolean,
  stock?: number
) =>{
  return {
    id,
    isNew: isNew ?? true,//si es null o undefined va a clocar el valor true, como s eusa ?? no cae en el error 0=false
    stock: stock ?? 0
  };
};

//EN JAVASCRIPT PASAN COSAS RARAS, TIPO..

// 0 === false
//'' === false
//false === false

//Se puede solucionar colocando ?? en lugar de ||

