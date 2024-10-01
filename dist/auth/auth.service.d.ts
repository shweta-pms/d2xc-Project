import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '../users/dto/signup.dto';
import { Users } from '../users/schemas/users.schemas';
import { LoginDto } from '../users/dto/login.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<Users>, jwtService: JwtService);
    SignUp(signUpdto: SignUpDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
