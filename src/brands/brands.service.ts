import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brands } from './schemas/brands.schemas';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brands.name) private model: Model<Brands>) {}
  async create(createBrandDto: CreateBrandDto) {
    return await this.model.create(createBrandDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    return await this.model.findByIdAndUpdate(id);
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete;
  }
}
