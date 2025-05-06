import { z } from 'zod';

/////////////////////////////////////////
// OPENING HOURS SCHEMA
/////////////////////////////////////////

export const OpeningHoursSchema = z.object({
  id: z.string().uuid(),
  dayOfWeek: z.number().int(),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean(),
  restaurantId: z.string(),
})

export type OpeningHours = z.infer<typeof OpeningHoursSchema>

export default OpeningHoursSchema;
