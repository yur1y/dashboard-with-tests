import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document, Schema as MongooseSchema } from 'mongoose';
import { Test } from '../tests/test.schema';

export type ResultDocument = Result & Document;

@Schema({versionKey: false})
export class Result {
  @Prop({ required: true })
  score: number; // percents of successfull test questions were answered

  @Prop({required: true}) // time that have used before submiting or exiting test
  createdAt: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Test' }) // test id fyi
  test_id: Test;

}

export const ResultSchema = SchemaFactory.createForClass(Result);