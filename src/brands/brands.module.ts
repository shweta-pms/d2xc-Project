import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Brands, BrandsSchema } from './schemas/brands.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brands.name, schema: BrandsSchema }]), // Register the schema
  ],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
