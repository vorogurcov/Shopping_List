import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import 'dotenv/config';
import * as cookieParser from 'cookie-parser';
async function bootstrap(){
    const app = await NestFactory.create(AppModule);
    const corsOptions = {
        origin: "http://localhost:8080",
        methods: "GET,POST,OPTIONS", // Allow specific methods
        allowedHeaders: "Content-Type",// Allow specific headers
        credentials:true,
    };
    app.use(cookieParser());

    app.enableCors(corsOptions);
    app.enableShutdownHooks();

    await app.listen(3000);
}

bootstrap();
