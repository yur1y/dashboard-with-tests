import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result, ResultDocument } from './result.schema';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(Result.name) private readonly model: Model<ResultDocument>,
  ) {}

  async findAll(): Promise<Result[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Result> {
    return await this.model.findById(id).exec();
  }

  async create(data: any): Promise<Result> {
    return await new this.model({
      ...data,
    }).save();
  }

  async update(id: string, data: any): Promise<Result> {
    return await this.model.findByIdAndUpdate(id, data).exec();
  }

  async delete(id: string): Promise<Result> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
