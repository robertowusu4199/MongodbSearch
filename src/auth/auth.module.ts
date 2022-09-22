import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SECRET_JWT } from '../app.const';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './local.auth';

@Module({
  imports: [UsersModule, 
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    ConfigModule.forRoot({isGlobal: true}),
    JwtModule.register({
    secret: 'keyboard-cat',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UsersService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
