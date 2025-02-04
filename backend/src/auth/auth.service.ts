import {Injectable,HttpRedirectResponse} from "@nestjs/common";
import {SignUpUserDto} from "./dto/sign_up-user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";
import {DbService} from "../db/db.service";
// const jwt = require('jsonwebtoken')
// const secret_key = require("../config/jwt_secret_key.js")
@Injectable()
export class AuthService{
    constructor(private readonly dbService:DbService){};
    async register(registerUserDto:RegisterUserDto){
        try {
            await this.dbService.createUser(registerUserDto);

            return {
                redirect:'authorization_page.html',
                statusCode:301
            };
        } catch (error) {
            console.log("Error during user registration:", error.message);
            return {
                redirect:'500.html',
                statusCode:500
            }
        }
    }

    async sign_up(signUpUserDto:SignUpUserDto){
        try {

            const result = await this.dbService.getUser(signUpUserDto);

            if (result) {
                // let jwt_token = jwt.sign({user_id:result.rows[0]['user_id']},secret_key, {expiresIn:60})
                // let jwt_refresh_token = jwt.sign({user_id:result.rows[0]['user_id']},secret_key,{expiresIn: 86400})
                //
                // values.push(jwt_refresh_token);
                // const query = {
                //     text: 'UPDATE users SET user_refresh_jwt_token = $3 WHERE user_email = $1 AND user_password = $2',
                //     values: values,
                // }
                //
                // await pool.query(query);
                //
                // res.setHeader("Set-Cookie",
                //     [`jwtToken=${jwt_token}; HttpOnly; Secure; SameSite=None; Max-Age=${60}`,
                //         `jwtRefreshToken=${jwt_refresh_token}; HttpOnly; Secure; SameSite=None; Max-Age=${24 * 60 * 60}`]);

                return {
                    redirect:'/pages/main_page.html',
                    statusCode:500
                };
            } else {
                return {
                    redirect:'500.html',
                    statusCode:500
                }
            }
        } catch (error) {
            console.error("Database query error:", error.message);
            return {
                redirect:'500.html',
                statusCode:500
            }
        }


    }
}