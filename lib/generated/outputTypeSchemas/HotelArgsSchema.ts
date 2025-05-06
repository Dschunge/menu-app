import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelSelectSchema } from '../inputTypeSchemas/HotelSelectSchema';
import { HotelIncludeSchema } from '../inputTypeSchemas/HotelIncludeSchema';

export const HotelArgsSchema: z.ZodType<Prisma.HotelDefaultArgs> = z.object({
  select: z.lazy(() => HotelSelectSchema).optional(),
  include: z.lazy(() => HotelIncludeSchema).optional(),
}).strict();

export default HotelArgsSchema;
