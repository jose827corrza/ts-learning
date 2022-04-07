import {faker} from '@faker-js/faker';
import {addProduct, products} from './products/productService';

for (let index = 0; index < 50; index++) {

  addProduct({
    title: faker.commerce.product(),
    stock: faker.datatype.number({min:10, max: 100}),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price(),10),
    categoryId: faker.datatype.uuid(),
    tags: faker.random.arrayElements(),
    size: faker.random.arrayElement(['M', 'S', 'L', 'XL'])
  });

}
console.log(products);



