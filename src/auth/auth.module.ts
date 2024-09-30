import { Inject, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { usersSchema } from '../users/schemas/users.schemas';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config:ConfigService)=>{
        return {
          secret:config.get('JWT_SECRET'),
          signOptions:{
            expiresIn: config.get('JWT_EXPIRES'),
          },
        };
      },
    }),

    MongooseModule.forFeature([{name:'Users',schema: usersSchema}]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  exports:[PassportModule]
})
export class AuthModule {}
