import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from '../users/dto/signup.dto';
import { LoginDto } from '../users/dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto){
    return await this.usersService.SignUp(signUpDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    return await this.usersService.login(loginDto);
  }
}
