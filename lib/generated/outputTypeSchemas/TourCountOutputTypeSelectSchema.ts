import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const TourCountOutputTypeSelectSchema: z.ZodType<Prisma.TourCountOutputTypeSelect> = z.object({
  pricecategory: z.boolean().optional(),
}).strict();

export default TourCountOutputTypeSelectSchema;
