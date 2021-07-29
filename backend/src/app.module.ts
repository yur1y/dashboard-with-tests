import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './questions/question.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';

const dbURL = 'mongodb://localhost/nest';

@Module({
  imports: [
MongooseModule.forRoot(dbURL),
    QuestionModule, ResultsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
