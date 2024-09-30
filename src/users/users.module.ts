import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from 'src/users/schemas/users.schemas';

@Module({
  imports:[
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config:ConfigService)=>{
        return {
          secret:'string',
          signOptions:{
            expiresIn: '1d',
          },
        };
      },
    }),

    MongooseModule.forFeature([{name:'Users',schema: usersSchema}]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersModule],

})
export class UsersModule {}
