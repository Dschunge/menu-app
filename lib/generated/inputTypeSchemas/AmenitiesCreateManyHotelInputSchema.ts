import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';

export const AmenitiesCreateManyHotelInputSchema: z.ZodType<Prisma.AmenitiesCreateManyHotelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  amenitiestype: z.lazy(() => AMENITIESTYPESchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AmenitiesCreateManyHotelInputSchema;
