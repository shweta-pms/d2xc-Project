import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type BrandDocument = HydratedDocument<Brands>;

@Schema()
export class Brands {
    @Prop({ required: true, type: String })
    name: string;
    @Prop({ required: true, type: String })
    img: string;
    @Prop({ required: true, type: String })
    href: string;
}
export const BrandsSchema = SchemaFactory.createForClass(Brands);
