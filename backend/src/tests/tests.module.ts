import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from './test.schema';

const dbURL = 'mongodb://localhost/nest';

@Module({
  providers: [TestService],
  controllers: [TestController],
  imports: [
    MongooseModule.forRoot(dbURL, MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }])),
  ],
})
export class TestsModule {}