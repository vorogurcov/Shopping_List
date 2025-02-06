import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: process.env.DB_NAME})
export class User_To_Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'user_id'})
    user_id
    @Column({name:'product_id'})
    product_id:string;

}