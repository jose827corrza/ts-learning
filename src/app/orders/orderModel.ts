import {BaseModel} from '../baseModel';
import {Product} from '../products/productModel';
import {User} from '../users/userModel';

export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
