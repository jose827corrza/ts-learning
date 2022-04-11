
//Se declaran los enums
export enum ROLES  {
  ADMIN = "administrator",
  DEV = "developer",
  CUSTOMER = "customer"
};

//estos enums se pueden usar para determinar typos
export type user = {
  username: string,
  role: ROLES
};

let jose: user;

// Va a solicitar un typo que esta encapsulado o limitado a ciertos enums, estos se llaman con el nombre del enum
jose= {
  username: "joseDev",
  role: ROLES.DEV
};
