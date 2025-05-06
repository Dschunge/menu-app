import { z } from 'zod';

/////////////////////////////////////////
// HOTEL SCHEMA
/////////////////////////////////////////

export const HotelSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  description_esp: z.string(),
  image: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  locationDescription: z.string(),
  locationDescription_esp: z.string(),
  images: z.string().array(),
  videos: z.string().array(),
  lat: z.number().int(),
  lng: z.number().int(),
  phone: z.string(),
  phone_reservation: z.string().nullable(),
  phone_tollfree: z.string().nullable(),
  email: z.string(),
  website: z.string(),
  facebook: z.string().nullable(),
  tripadvisor: z.string().nullable(),
  instagram: z.string().nullable(),
  youtube: z.string().nullable(),
  whatsapp: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Hotel = z.infer<typeof HotelSchema>

export default HotelSchema;
