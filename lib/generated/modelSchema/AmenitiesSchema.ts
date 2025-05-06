import { z } from 'zod';
import { AMENITIESTYPESchema } from '../inputTypeSchemas/AMENITIESTYPESchema'

/////////////////////////////////////////
// AMENITIES SCHEMA
/////////////////////////////////////////

export const AmenitiesSchema = z.object({
  amenitiestype: AMENITIESTYPESchema,
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  image: z.string(),
  hotelId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Amenities = z.infer<typeof AmenitiesSchema>

export default AmenitiesSchema;
