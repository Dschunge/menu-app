import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelScalarRelationFilterSchema: z.ZodType<Prisma.HotelScalarRelationFilter> = z.object({
  is: z.lazy(() => HotelWhereInputSchema).optional(),
  isNot: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelScalarRelationFilterSchema;
