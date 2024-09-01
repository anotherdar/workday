import { appSchema } from '@nozbe/watermelondb';
import { sellerSchema } from './Sellers';
import { productSchema } from './Products';
import { transactionSchema } from './Transaction';

export const schema = appSchema({
  version: 1,
  tables: [
    sellerSchema,
    productSchema,
    transactionSchema,
  ],
});
