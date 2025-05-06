import { z } from 'zod';

/////////////////////////////////////////
// SPA PRICE CATEGORY SCHEMA
/////////////////////////////////////////

export const SpaPriceCategorySchema = z.object({
  id: z.string().uuid(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  description_esp: z.string(),
  duration: z.number().int(),
  spaId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SpaPriceCategory = z.infer<typeof SpaPriceCategorySchema>

export default SpaPriceCategorySchema;
