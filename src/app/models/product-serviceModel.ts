import {CreateProduct, UpdateProduct} from '../products/productDtoModel';
import {Product} from '../models/productModel';

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: Product): Product | Promise<Product>;
    create(dto: CreateProduct): Product | Promise<Product>;
    findOne(id: Product['id']): Product | Promise<Product> | undefined;
}