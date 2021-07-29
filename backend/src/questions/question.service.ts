import { Injectable } from '@nestjs/common';
import { InjectModel, SchemaOptions } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private readonly model: Model<QuestionDocument>) {}

  async findAll(query:any={}, project: any = {}): Promise<Question[]> {
    return await this.model.find(query, project).exec();
  }

  async findOne(id: string): Promise<Question> {
    return await this.model.findById(id).exec();
  }

  async create(data: any): Promise<Question> {
    return await new this.model({
      ...data,
    }).save();
  }
  async createMany(data: Question[]): Promise<Question[]> {
    return await this.model.insertMany(data);
  }

  async update(id: string, data: any): Promise<Question> {
    return await this.model.findByIdAndUpdate(id, data).exec();
  }

  async delete(id: string): Promise<Question> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
