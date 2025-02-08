import {Module} from '@nestjs/common'
import {DbService} from "./db.service";
import {ConfigModule} from "../config/config.module";
import {RedisModule} from "../redis/redis.module";

@Module({
    imports:[ConfigModule,RedisModule],
    providers:[DbService],
    exports: [DbService],
})
export class DbModule{};