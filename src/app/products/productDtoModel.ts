import {Product} from '../products/productModel';

export interface CreateProduct extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}
