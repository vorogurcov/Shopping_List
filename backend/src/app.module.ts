import {Module} from '@nestjs/common'
import {AuthModule} from "./auth/auth.module";
import {ProductsModule} from "./products/products.module";
import {RedisModule} from "./redis/redis.module";

@Module({
    imports:[AuthModule,ProductsModule,RedisModule]
})
export class AppModule {};