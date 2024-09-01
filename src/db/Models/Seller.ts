// src/models/Seller.ts
import { Model } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

export class Seller extends Model {
  static table = 'sellers';

  @text('name')
  name!: string;
}
