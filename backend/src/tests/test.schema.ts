import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Question } from '../questions/question.schema';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({ required: true })
  text: string;

  @Prop({required: true}) 
  time: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
  questions: Question[];

}

export const TestSchema = SchemaFactory.createForClass(Test);