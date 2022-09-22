import { InjectModel } from "@nestjs/mongoose";
import {DataFactory, Seeder} from "nestjs-seeder";
import {Product, ProductDocument} from "./product.entity";
import {Model} from "mongoose";

export class ProductSeeder implements Seeder{

    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ) { }

    async seed(): Promise<any> {
        const products = DataFactory.createForClass(Product).generate(10);

        return this.productModel.insertMany(products);
    }

    async drop(): Promise<any> {
        return this.productModel.deleteMany({}) as any;
    }

}