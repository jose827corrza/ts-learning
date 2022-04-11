import {BaseModel} from '../baseModel';
import {Category} from './categoryModel';

export interface Product extends BaseModel{
  title: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
};
