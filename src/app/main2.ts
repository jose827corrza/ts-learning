import {ProductHttpService} from './products/product-httpService';

const productService = ProductHttpService.create();

(async () =>{
    const products = await productService?.getAll();
    const product = await productService?.findOne(104);
    console.log(products);

    console.log('---'.repeat(10));
    console.log(product); 
    
    
})();