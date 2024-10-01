import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Model } from 'mongoose';
import { Brands } from './schemas/brands.schemas';
export declare class BrandsService {
    private model;
    constructor(model: Model<Brands>);
    create(createBrandDto: CreateBrandDto): Promise<import("mongoose").Document<unknown, {}, Brands> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Brands> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Brands> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<import("mongoose").Document<unknown, {}, Brands> & Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        <ResultDoc = import("mongoose").Document<unknown, {}, Brands> & Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<Brands> & {
            lean: true;
        }): import("mongoose").Query<import("mongoose").FlattenMaps<Brands> & {
            _id: import("mongoose").Types.ObjectId;
        }, ResultDoc, {}, Brands, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, Brands> & Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<Brands> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, Brands, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, Brands> & Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id?: import("bson").ObjectId | any, options?: import("mongoose").QueryOptions<Brands>): import("mongoose").Query<ResultDoc, ResultDoc, {}, Brands, "findOneAndDelete", {}>;
    }>;
}
