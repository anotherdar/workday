// src/models/Transaction.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, immutableRelation } from '@nozbe/watermelondb/decorators';
import {Seller} from './Seller';
import {Product} from './Product';

export class Transaction extends Model {
  static table = 'transactions';

  @immutableRelation('sellers', 'seller_id')
  seller!: Seller;

  @immutableRelation('products', 'product_id')
  product!: Product;

  @field('quantity')
  quantity!: number;

  @text('date')
  date!: string;
}
