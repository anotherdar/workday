// src/schema/productSchema.ts
import { tableSchema } from '@nozbe/watermelondb/Schema';

export const productSchema = tableSchema({
  name: 'products',
  columns: [
    { name: 'name', type: 'string' },
  ],
});
