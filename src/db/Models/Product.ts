// src/models/Product.ts
import { Model } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

export class Product extends Model {
  static table = 'products';

  @text('name')
  name!: string;
}
