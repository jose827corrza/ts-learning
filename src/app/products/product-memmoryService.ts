import { Product} from '../models/productModel';
import {CreateProduct, UpdateProduct} from './productDtoModel';
import {faker} from '@faker-js/faker';


export class ProductServiceMemmory {
  private  products: Product[] = [];

  getAll(){
    return this.products;
  }

  create(data: CreateProduct){
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }
    this.add(newProduct);
    return newProduct;
  }

  add(product: Product){
    this.products.push(product);
    return product;
  }
  
  update(id: Product['id'], changes: UpdateProduct): Product{
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ... prevData,
      ... changes
    }
    return this.products[index];
  }

  findOne(id: Product['id']){
    return this.products.find(item => item.id === id);
    
  }
}



