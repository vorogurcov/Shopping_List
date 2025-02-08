import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: 'users_to_products'})
export class UserToProduct{

    constructor(data?: Partial<UserToProduct>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'user_id'})
    user_id:number;
    @Column({name:'product_id'})
    product_id:number;

}