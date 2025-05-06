import { z } from 'zod';

/////////////////////////////////////////
// TOUR PRICE CATEGORY SCHEMA
/////////////////////////////////////////

export const TourPriceCategorySchema = z.object({
  id: z.string().uuid(),
  sku: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  description_esp: z.string(),
  tourId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TourPriceCategory = z.infer<typeof TourPriceCategorySchema>

export default TourPriceCategorySchema;
