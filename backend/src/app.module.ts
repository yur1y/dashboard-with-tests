import { MongooseModule } from '@nestjs/mongoose';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './questions/question.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';
import { CorsMiddleware } from './middlewares/cors.middleware';

const dbURL = 'mongodb://localhost/nest';

@Module({
  imports: [
MongooseModule.forRoot(dbURL),
    QuestionModule, ResultsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(CorsMiddleware).forRoutes('*')
  }
}
