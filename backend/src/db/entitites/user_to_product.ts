import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./user";
import {Product} from "./product";


@Entity({name: 'users_to_products'})
export class UserToProduct{

    constructor(data?: Partial<UserToProduct>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => User)
    @Column({name:'user_id'})
    user_id:number;

    @ManyToOne(()=> Product)
    @Column({name:'product_id'})
    product_id:number;

}