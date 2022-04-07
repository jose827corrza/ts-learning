import {BaseModel} from '../baseModel';

export enum ROLES {
  ADMIN = 'administrator',
  DEV = 'developer',
  CUSTOMER = 'customer'
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
