import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/users.schemas").Users> & import("./schemas/users.schemas").Users & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/users.schemas").Users> & import("./schemas/users.schemas").Users & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/users.schemas").Users> & import("./schemas/users.schemas").Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<import("./schemas/users.schemas").Users> & {
            lean: true;
        }): import("mongoose").Query<import("mongoose").FlattenMaps<import("./schemas/users.schemas").Users> & {
            _id: import("mongoose").Types.ObjectId;
        }, ResultDoc, {}, import("./schemas/users.schemas").Users, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/users.schemas").Users> & import("./schemas/users.schemas").Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<import("./schemas/users.schemas").Users> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, import("./schemas/users.schemas").Users, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/users.schemas").Users> & import("./schemas/users.schemas").Users & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id?: import("bson").ObjectId | any, options?: import("mongoose").QueryOptions<import("./schemas/users.schemas").Users>): import("mongoose").Query<ResultDoc, ResultDoc, {}, import("./schemas/users.schemas").Users, "findOneAndDelete", {}>;
    }>;
}
