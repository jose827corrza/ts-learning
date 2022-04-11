import {ROLES, user} from './01-enums';

let currentUser: user;

currentUser = {
  username: 'joseDev',
  role: ROLES.DEV
};

//Aca usamos lo que se llaman parametros rest, que en pocas palabras es que se pueden enviar parametros indefinidamente
const checkRole = (...args: string[]) =>{
  if(args.includes(currentUser.role)){
    return true;
  }
  return false
};

const rta = checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.DEV);
console.log(rta);
