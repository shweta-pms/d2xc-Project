import { AuthService } from './auth.service';
import { SignUpDto } from '../users/dto/signup.dto';
import { LoginDto } from '../users/dto/login.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signUp(signUpDto: SignUpDto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("../users/schemas/users.schemas").Users> & import("../users/schemas/users.schemas").Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
