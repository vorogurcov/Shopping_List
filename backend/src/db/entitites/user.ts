import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: process.env.DB_NAME})
export class User{
    @PrimaryGeneratedColumn()
    user_id:number;

    @Column({name:'user_name'})
    name:string;
    @Column({name:'last_name'})
    last_name:string;

    @Column({name:'user_email'})
    email:string;

    @Column({name:'user_password'})
    password:string;

}