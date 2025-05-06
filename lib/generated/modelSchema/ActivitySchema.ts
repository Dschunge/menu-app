import { z } from 'zod';
import { RECURRINGPATTERNSchema } from '../inputTypeSchemas/RECURRINGPATTERNSchema'

/////////////////////////////////////////
// ACTIVITY SCHEMA
/////////////////////////////////////////

export const ActivitySchema = z.object({
  recurrencePattern: RECURRINGPATTERNSchema,
  id: z.string().uuid(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string(),
  description_esp: z.string(),
  image: z.string(),
  profileImage: z.string().nullable(),
  hotelId: z.string(),
  type: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  price: z.number().int(),
  cashOnly: z.boolean(),
  freeOfCharge: z.boolean(),
  location: z.string(),
  isRecurring: z.boolean(),
  recurrenceDays: z.string().array(),
  recurrenceEndDate: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Activity = z.infer<typeof ActivitySchema>

export default ActivitySchema;
