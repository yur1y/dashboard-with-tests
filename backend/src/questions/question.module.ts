import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './question.schema';

@Module({
  providers: [QuestionService],
  controllers: [QuestionController],
  imports: [
    MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }]),
  ],
  exports: [QuestionService]
})
export class QuestionModule {}