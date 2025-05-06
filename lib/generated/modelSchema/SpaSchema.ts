import { z } from 'zod';

/////////////////////////////////////////
// SPA SCHEMA
/////////////////////////////////////////

export const SpaSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string(),
  description_esp: z.string(),
  hotelId: z.string(),
  type: z.string(),
  videos: z.string().array(),
  images: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Spa = z.infer<typeof SpaSchema>

export default SpaSchema;
