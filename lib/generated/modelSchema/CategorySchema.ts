import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string().nullable(),
  slug: z.string(),
  description: z.string().nullable(),
  description_esp: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  restaurantId: z.string(),
  postition: z.number().int(),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema;
