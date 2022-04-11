import {Product} from '../models/productModel';
import {Category} from '../models/categoryModel';

export interface CreateProduct extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

export  interface UpdateProduct extends Partial<CreateProduct>{}