import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from './test.schema';

@Module({
  providers: [TestService],
  controllers: [TestController],
  imports: [
     MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
})
export class TestsModule {}