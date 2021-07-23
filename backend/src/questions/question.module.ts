import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './question.schema';

const dbURL = 'mongodb://localhost/nest';

@Module({
  providers: [QuestionService],
  controllers: [QuestionController],
  imports: [
    MongooseModule.forRoot(dbURL, MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])),
  ],
})
export class QuestionModule {}