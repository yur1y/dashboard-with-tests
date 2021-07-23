import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Question } from '../questions/question.schema';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({ required: true })
  name: string;

  @Prop({required: true}) 
  time: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Question' }] })
  questions: Question[];

}

export const TestSchema = SchemaFactory.createForClass(Test);