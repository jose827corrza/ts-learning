const createProductTsMode = (
  id: string,
  isNew: boolean,
  stock: number = 0 //Asi se establece un valor default en TS, es mucho mas sitactico
) =>{
  return {
    id,
    isNew, // Y ya no es necesario poner el nullish-coaersing, por que viene "bien" desde la entrada de los parametros
    stock
  };
};
