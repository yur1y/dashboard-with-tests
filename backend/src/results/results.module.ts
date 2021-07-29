import { Module } from '@nestjs/common';
import { ResultService } from './results.service';
import { ResultsController } from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Result, ResultSchema } from './result.schema';
import { TestsModule } from 'src/tests/tests.module';
import { QuestionModule } from 'src/questions/question.module';


@Module({
  providers: [ResultService],
  controllers: [ResultsController],
  imports: [
     MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }]),
     QuestionModule,
     TestsModule
  ],
})
export class ResultsModule {}