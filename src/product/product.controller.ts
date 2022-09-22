import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {

    constructor(private readonly productservice: ProductService) {}
    
    @Get('/frontend')
    async frontend() {
        return this.productservice.find()
    }

    @Get('backend')
    async backend(@Req() req: Request) {
        let options = {};

        if (req.query.s) {
            options = {
                $or: [
                    {title: new RegExp(req.query.s.toString(), 'i')},
                    {description: new RegExp(req.query.s.toString(), 'i')},
                ]
            }
        }

        const data = this.productservice.find({options});

        return {data};
    }
}
