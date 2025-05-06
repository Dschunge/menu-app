import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const HotelCountOutputTypeSelectSchema: z.ZodType<Prisma.HotelCountOutputTypeSelect> = z.object({
  activities: z.boolean().optional(),
  tours: z.boolean().optional(),
  spa: z.boolean().optional(),
  amenities: z.boolean().optional(),
  tvchannels: z.boolean().optional(),
}).strict();

export default HotelCountOutputTypeSelectSchema;
