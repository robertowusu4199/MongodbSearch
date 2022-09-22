import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import {seeder} from "nestjs-seeder";
import { Product, ProductSchema } from "./product.entity";
import { ProductSeeder } from "./product.seeder";

seeder({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        MongooseModule.forRoot(process.env.MONGO_CONNECTION),
        MongooseModule.forFeature([{
        name: Product.name, schema: ProductSchema}])
    ]
}).run([ProductSeeder]);