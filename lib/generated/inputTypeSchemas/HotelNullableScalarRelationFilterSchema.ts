import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelNullableScalarRelationFilterSchema: z.ZodType<Prisma.HotelNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => HotelWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => HotelWhereInputSchema).optional().nullable()
}).strict();

export default HotelNullableScalarRelationFilterSchema;
