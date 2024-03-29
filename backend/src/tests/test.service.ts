import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test, TestDocument } from './test.schema';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(Test.name) private readonly model: Model<TestDocument>) {}

  async findAll(): Promise<Test[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Test> {
    return await this.model.findById(id).exec();
  }

  async create(data: any): Promise<Test> {
    return await new this.model({
      ...data,
    }).save();
  }

  async update(id: string, data: any): Promise<Test> {
    return await this.model.findByIdAndUpdate(id, data).exec();
  }

  async delete(id: string): Promise<Test> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
