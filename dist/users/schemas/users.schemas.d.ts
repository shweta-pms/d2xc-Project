export declare class Users {
    name: string;
    email: string;
    password: string;
}
export declare const usersSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any, import("mongoose").Document<unknown, any, Users> & Users & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Users, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Users>> & import("mongoose").FlatRecord<Users> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
