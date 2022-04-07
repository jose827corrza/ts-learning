import {BaseModel} from '../baseModel';
import {Category} from '../categories/categoryModel';
export type Sizes = 'S' | 'M' |'L' | 'XL';

export interface Product extends BaseModel{
  title: string;
  image: string;
  description: string;
  stock: number;
  isNew: boolean;
  price: number;
  category: Category;
  tags: string[];
  size?: Sizes;
};
