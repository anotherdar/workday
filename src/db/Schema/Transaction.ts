// src/schema/transactionSchema.ts
import { tableSchema } from '@nozbe/watermelondb/Schema';

export const transactionSchema = tableSchema({
  name: 'transactions',
  columns: [
    { name: 'seller_id', type: 'string' },
    { name: 'product_id', type: 'string' },
    { name: 'quantity', type: 'number' },
    { name: 'date', type: 'string' },
  ],
});
