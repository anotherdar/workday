// src/schema/sellerSchema.ts
import { tableSchema } from '@nozbe/watermelondb/Schema';

export const sellerSchema = tableSchema({
  name: 'sellers',
  columns: [
    { name: 'name', type: 'string' },
  ],
});
