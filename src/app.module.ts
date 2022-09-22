import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
  ConfigModule.forRoot({isGlobal: true}),
  MongooseModule.forRoot(process.env.MONGO_CONNECTION,
  {useNewUrlParser: true, useUnifiedTopology: true}),
  UsersModule,
  AuthModule,
  ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
