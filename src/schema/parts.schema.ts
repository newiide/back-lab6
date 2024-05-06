import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ collection: 'parts' })
export class Parts {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  pageLinks: string;

}
export const PartsSchema = SchemaFactory.createForClass(Parts);

export type PartsLeanDoc = Parts & { _id: Types.ObjectId };
export type PartsDoc = Parts & Document;
