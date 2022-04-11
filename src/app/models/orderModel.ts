import {BaseModel} from '../baseModel';
import {Product} from './productModel';
import {User} from './userModel';

export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
