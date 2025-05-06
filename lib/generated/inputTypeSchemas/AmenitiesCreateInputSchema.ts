import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { HotelCreateNestedOneWithoutAmenitiesInputSchema } from './HotelCreateNestedOneWithoutAmenitiesInputSchema';

export const AmenitiesCreateInputSchema: z.ZodType<Prisma.AmenitiesCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  amenitiestype: z.lazy(() => AMENITIESTYPESchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Hotel: z.lazy(() => HotelCreateNestedOneWithoutAmenitiesInputSchema).optional()
}).strict();

export default AmenitiesCreateInputSchema;
