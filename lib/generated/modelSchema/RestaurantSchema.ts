import { z } from 'zod';

/////////////////////////////////////////
// RESTAURANT SCHEMA
/////////////////////////////////////////

export const RestaurantSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  descriptionshort: z.string().nullable(),
  description_esp: z.string().nullable(),
  descriptionshort_esp: z.string().nullable(),
  image: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zipCode: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  website: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  listorder: z.number().int(),
})

export type Restaurant = z.infer<typeof RestaurantSchema>

export default RestaurantSchema;
