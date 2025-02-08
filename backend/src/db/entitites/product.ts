import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: 'products'})
export class Product{
    constructor(data?: Partial<Product>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    @PrimaryGeneratedColumn()
    product_id:number;

    @Column({name:'product_image'})
    image:string;
    @Column({name:'product_creator'})
    creator:string;

    @Column({name:'product_price'})
    price:string;

}