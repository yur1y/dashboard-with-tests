import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Test } from '../tests/test.schema';

export type ResultDocument = Result & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  text: string;

  @Prop({required: true}) 
  time: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
  test: Test;

}

export const TestSchema = SchemaFactory.createForClass(Result);