import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document, Schema as MongooseSchema } from 'mongoose';
import { Test } from '../tests/test.schema';

export type ResultDocument = Result & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  score: number; // percents of successfull test questions were answered

  @Prop({required: true}) // time that have used before submiting or exiting test
  time: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Test' }) // test id fyi
  test: Test;

}

export const ResultSchema = SchemaFactory.createForClass(Result);