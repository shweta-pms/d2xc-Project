import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/users/schemas/users.schemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
    private jwtService: JwtService
  ) {}
   async SignUp(signUpdto: SignUpDto){
    const { name, email, password } = signUpdto;
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword
    });


    // const token = this.jwtService.sign({user})

    return {user };
  }

  async login(loginDto:LoginDto){
    const {email,password} = loginDto;

    const user = await this.userModel.findOne({email})
    if(!user){
      throw new UnauthorizedException('Invalid email and password')
    }
    const isPasswordMatched = await bcrypt.compare(password,user.password)
    if(!isPasswordMatched){
      throw new UnauthorizedException('invalid email or password')
    }
    const token = this.jwtService.sign({user})

    return { token };
  }
}