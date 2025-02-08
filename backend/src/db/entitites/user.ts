import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: 'users'})
export class User{

    constructor(data?: Partial<User>) {
        if (data) {
            Object.assign(this, data);
        }
    }

    @PrimaryGeneratedColumn()
    user_id:number;

    @Column({name:'user_name'})
    name:string;
    @Column({name:'user_last_name'})
    last_name:string;

    @Column({name:'user_email'})
    email:string;

    @Column({name:'user_password'})
    password:string;

}