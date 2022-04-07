import {Sizes, Product} from './productModel';
import {CreateProduct} from '../products/productDtoModel';
import {faker} from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProduct): Product =>{
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}
