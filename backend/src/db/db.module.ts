import {Module} from '@nestjs/common'
import {DbService} from "./db.service";
import {ConfigModule} from "../config/config.module";

@Module({
    imports:[ConfigModule],
    providers:[DbService],
    exports: [DbService],
})
export class DbModule{};