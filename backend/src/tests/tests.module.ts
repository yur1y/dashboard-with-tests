import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from './test.schema';
import { QuestionModule } from 'src/questions/question.module';

@Module({
  providers: [TestService],
  controllers: [TestController],
  imports: [
     MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
     QuestionModule
  ],
  exports: [TestService]
})
export class TestsModule {}