import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true })
  text: string;

  @Prop([String])
  variants: string[];

  @Prop([Boolean])
  correct: boolean[];

}

export const QuestionSchema = SchemaFactory.createForClass(Question);