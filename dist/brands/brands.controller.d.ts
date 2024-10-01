import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<import("./schemas/brands.schemas").Brands> & {
            lean: true;
        }): import("mongoose").Query<import("mongoose").FlattenMaps<import("./schemas/brands.schemas").Brands> & {
            _id: import("mongoose").Types.ObjectId;
        }, ResultDoc, {}, import("./schemas/brands.schemas").Brands, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<import("./schemas/brands.schemas").Brands> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, import("./schemas/brands.schemas").Brands, "findOneAndDelete", {}>;
        <ResultDoc = import("mongoose").Document<unknown, {}, import("./schemas/brands.schemas").Brands> & import("./schemas/brands.schemas").Brands & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>(id?: import("bson").ObjectId | any, options?: import("mongoose").QueryOptions<import("./schemas/brands.schemas").Brands>): import("mongoose").Query<ResultDoc, ResultDoc, {}, import("./schemas/brands.schemas").Brands, "findOneAndDelete", {}>;
    }>;
}
