import {Injectable} from '@nestjs/common'
import {DatabaseConfig} from "../db/interfaces/databaseConfig.interface";

@Injectable()
export class ConfigService{
    private readonly dbConfig:DatabaseConfig;
    constructor(){
        this.dbConfig = {
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? '5432'),
            username: process.env.DB_USER || 'user',
            type: 'postgres',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'mydb',

        }
    }
    getDbConfig(){
        return this.dbConfig;
    }
}