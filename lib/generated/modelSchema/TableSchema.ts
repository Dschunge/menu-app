import { z } from 'zod';

/////////////////////////////////////////
// TABLE SCHEMA
/////////////////////////////////////////

export const TableSchema = z.object({
  id: z.string().uuid(),
  number: z.number().int(),
  capacity: z.number().int(),
  location: z.string().nullable(),
  isActive: z.boolean(),
  restaurantId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Table = z.infer<typeof TableSchema>

export default TableSchema;
