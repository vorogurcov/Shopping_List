import {Injectable} from "@nestjs/common";
import {DatabaseConfig} from "./interfaces/databaseConfig.interface";
//import {Pool} from "pg";
import {DataSource} from "typeorm";
import {RegisterUserDto} from "../auth/dto/register-user.dto";
import {SignUpUserDto} from "../auth/dto/sign_up-user.dto";
import {ConfigService} from "../config/config.service";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {User} from "./entitites/user";
import {Product} from "./entitites/product";
import {UserToProduct} from "./entitites/user_to_product";



@Injectable()
export class DbService{
    private readonly dbConfig:DatabaseConfig;
    private AppDataSource: DataSource;
    constructor(private readonly configService:ConfigService){
        this.dbConfig = this.configService.getDbConfig();
        this.dbConfig['synchronize'] = false;
        this.dbConfig['entities'] = [User,UserToProduct,Product];
        this.AppDataSource = new DataSource(this.dbConfig as PostgresConnectionOptions);
        this.AppDataSource.initialize();
    }

    async createUser(registerUserDto:RegisterUserDto){
        try{
            let values = Object.values(registerUserDto)
            // const query = {
            //     text: 'INSERT INTO users(user_name, user_last_name, user_email, user_password) VALUES($1, $2, $3, $4)',
            //     values: values,
            // };
            // //use DataSource
            // const result = await this.pool.query(query);
            const user = new User({name: values[0], last_name:values[1], email:values[2], password:values[3]});
            const result = await this.AppDataSource.manager.save(user);

            return result;
        }catch(error){
            throw error;
        }

    }

    async getUser(signUpUserDto:SignUpUserDto){
        try{
            let values = Object.values(signUpUserDto)
            //const user = new User({name: values[0], last_name:values[1], email:values[2], password:values[3]});

            // const query = {
            //     text: 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2',
            //     values: values,
            // };
            //
            // const result = await this.pool.query(query);
            // return result.rows.length > 0

            console.log(values);
            const userExists = await this.AppDataSource.manager.exists(User, {
                where:{
                    email:values[0],
                    password:values[1]
                }
            })

            console.log(userExists)
            return userExists;
        }catch(error){
            throw error;
        }
    }

    async getProductsPage(pageObject:{page:number}){
        try{
            let values = Object.values(pageObject);

            //let jwt_token = req.cookies.jwtToken;

            // let decoded;
            // try {
            //     decoded = jwt.verify(jwt_token, SECRET_KEY);
            // } catch (err) {
            //     if (err.name === 'JsonWebTokenError') {
            //         const refreshToken = req.cookies.jwtRefreshToken;
            //         if (!refreshToken) {
            //             return res.status(401).json({ message: "Refresh token required" });
            //         }

            //         try {
            //             const refreshDecoded = jwt.verify(refreshToken, SECRET_KEY);
            //             const newAccessToken = jwt.sign({user_id:refreshDecoded.user_id},secret_key, {expiresIn:60});
            //             console.log("CREATE NEW ACCESS TOKEN");
            //             res.setHeader('Set-Cookie', `jwtToken=${newAccessToken}; HttpOnly; Secure; SameSite=None; Max-Age=60`);
            //             decoded = jwt.verify(newAccessToken,SECRET_KEY);
            //         } catch (refreshErr) {
            //             return res.status(403).json({ message: "Invalid or expired refresh token" });
            //         }
            //     } else {
            //         return res.status(403).json({ message: err.message + err.name });
            //     }
            // }


            // const user_id = decoded.user_id;

            const user_id = 1;
            values.push(user_id);


            // const query = {
            //     text: 'SELECT * FROM users_to_products usp INNER JOIN users u on usp.user_id = u.user_id INNER JOIN products p on p.product_id = usp.product_id WHERE u.user_id = $2 LIMIT 4 OFFSET (4*$1)',
            //     values: values,
            // }
            //
            // let result = await this.pool.query(query);
            // return result.rows


            const result = await this.AppDataSource.manager
                .createQueryBuilder()
                .from("users_to_products", "usp")
                .innerJoin("users", "u", "usp.user_id = u.user_id")
                .innerJoin("products", "p", "usp.product_id = p.product_id")
                .where("u.user_id = :userId", { userId: values[1] })
                .limit(4)
                .offset(4 * values[0])
                .getRawMany();

            return result;
        }catch(error){
            console.log(error)
            throw(error)
        }
    }
}