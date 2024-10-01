import { HydratedDocument } from 'mongoose';
export type BrandDocument = HydratedDocument<Brands>;
export declare class Brands {
    name: string;
    img: string;
    href: string;
}
export declare const BrandsSchema: import("mongoose").Schema<Brands, import("mongoose").Model<Brands, any, any, any, import("mongoose").Document<unknown, any, Brands> & Brands & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Brands, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Brands>> & import("mongoose").FlatRecord<Brands> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
