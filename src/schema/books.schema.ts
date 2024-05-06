import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ collection: 'books' })
export class Books {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  pageLinks: string;

}
export const BooksSchema = SchemaFactory.createForClass(Books);

export type BooksLeanDoc = Books & { _id: Types.ObjectId };
export type BooksDoc = Books & Document;
