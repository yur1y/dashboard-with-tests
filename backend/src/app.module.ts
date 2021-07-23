import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './questions/question.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [QuestionModule, ResultsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
