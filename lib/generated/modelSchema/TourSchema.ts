import { z } from 'zod';

/////////////////////////////////////////
// TOUR SCHEMA
/////////////////////////////////////////

export const TourSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string(),
  description_esp: z.string(),
  image: z.string(),
  hotelId: z.string(),
  price: z.number().int(),
  priceKids: z.number().int(),
  category: z.string(),
  offer: z.boolean(),
  discount: z.number().int(),
  whattobring: z.string(),
  included: z.string().array(),
  pickuptime: z.coerce.date(),
  maxPeople: z.number().int(),
  minPeople: z.number().int(),
  minAge: z.number().int(),
  bestSeller: z.boolean(),
  priceInfo: z.string(),
  location: z.string(),
  offered: z.string().array(),
  duration: z.number().int(),
  videos: z.string().array(),
  images: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tour = z.infer<typeof TourSchema>

export default TourSchema;
