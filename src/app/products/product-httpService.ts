import axios from 'axios';
import { ProductService } from '../models/product-serviceModel';
import { Product } from '../models/productModel';
import { CreateProduct, UpdateProduct } from './productDtoModel';

export class ProductHttpService implements ProductService {
    private URL = 'https://api.escuelajs.co/api/v1/products';
    private constructor(){}
    static instance: ProductHttpService | null = null;
    /**
     * 
     * @returns Returns a singleton class instance.
     * So to invoque must be this way...
     * const service = ProductHttpService.create();
     */
    static create(){
        if(ProductHttpService.instance == null){
            this.instance = new ProductHttpService();
        }
        return ProductHttpService.instance;
    }

    async getAll() {
        const { data } = await axios.get<Product[]>(this.URL);
        return data;
    }
    async update(id: Product['id'], changes: UpdateProduct) {
        const { data } = await axios.put<Product>(`${this.URL}/${id}`, changes);
        return data;
    }
    async create(dto: CreateProduct) {
        const { data } = await axios.post<Product>(this.URL, dto);
        return data;
    }
    async findOne(id: Product['id']) {
        const { data } = await axios.get<Product>(`${this.URL}/${id}`);
        return data;
    }



}