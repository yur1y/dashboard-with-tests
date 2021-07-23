import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './question.schema';
import { BaseQuestionDto} from './base-question.dto'
@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private readonly model: Model<QuestionDocument>,
  ) {}

  async findAll(): Promise<Question[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Question> {
    return await this.model.findById(id).exec();
  }

  async create(createQuestionDto: BaseQuestionDto): Promise<Question> {
    return await new this.model({
      ...createQuestionDto,
    }).save();
  }

  async update(id: string, updateQuestionDto: BaseQuestionDto): Promise<Question> {
    return await this.model.findByIdAndUpdate(id, updateQuestionDto).exec();
  }

  async delete(id: string): Promise<Question> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
