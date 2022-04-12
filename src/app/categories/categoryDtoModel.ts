import { Category, AccessType } from '../models/categoryModel';
import { IsNotEmpty, Length, validate, validateOrReject, IsOptional, IsEnum, IsUrl } from 'class-validator';

export interface ICreateCategory extends Omit<Category, 'id'> { }

export interface UpdateCategory extends Partial<CreateCategory> { }

export class CreateCategory implements ICreateCategory {

    //Los decoradores van a venir siendo validadores
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;

    @IsNotEmpty()
    @IsUrl()
    image!: string;

    // Para usar algunos toca activar los experimentales en tsconfig.json
    //Algo muy importante, es que a diferencia de TS, estos vienen a revelar el problema ya en tiempo de ejecucion
    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async () => {
    try {
        const dto = new CreateCategory();
        dto.name = 'noA';
        dto.image = 'https://api.escuelajs.co/api/v1/categories';
        dto.access = AccessType.PUBLIC;
        await validateOrReject(dto);
    } catch (error) {
        console.log(error);
    }
})()