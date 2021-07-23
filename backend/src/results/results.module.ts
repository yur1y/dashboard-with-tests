import { Module } from '@nestjs/common';
import { ResultService } from './results.service';
import { ResultsController } from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Result, ResultSchema } from './result.schema';


@Module({
  providers: [ResultService],
  controllers: [ResultsController],
  imports: [
     MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }]),
  ],
})
export class ResultsModule {}