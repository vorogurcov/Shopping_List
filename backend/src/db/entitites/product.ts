import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: process.env.DB_NAME})
export class Product{
    @PrimaryGeneratedColumn()
    product_id:number;

    @Column({name:'product_image'})
    image:string;
    @Column({name:'product_creator'})
    creator:string;

    @Column({name:'product_price'})
    price:string;

}