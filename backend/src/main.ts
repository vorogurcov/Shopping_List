import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import 'dotenv/config';

async function bootstrap(){
    const app = await NestFactory.create(AppModule);

    const corsOptions = {
        origin: "http://localhost:8080",
        methods: "GET,POST,OPTIONS", // Allow specific methods
        allowedHeaders: "Content-Type",// Allow specific headers
        credentials:true,
    };

    app.enableCors(corsOptions);
    await app.listen(3000);
}

bootstrap();
