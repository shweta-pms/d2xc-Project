import { SignUpDto } from './dto/signup.dto';
import { Users } from 'src/users/schemas/users.schemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class UsersService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<Users>, jwtService: JwtService);
    SignUp(signUpdto: SignUpDto): Promise<{
        user: import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Users> & Users & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Users> & Users & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        <ResultDoc = import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<Users> & {
            lean: true;
        }): import("mongoose").Query<import("mongoose").FlattenMaps<Users> & {
            _id: import("mongoose").Types.ObjectId;
        }, ResultDoc, {}, Users, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<Users> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, Users, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, Users> & Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id?: import("bson").ObjectId | any, options?: import("mongoose").QueryOptions<Users>): import("mongoose").Query<ResultDoc, ResultDoc, {}, Users, "findOneAndDelete", {}>;
    }>;
}
