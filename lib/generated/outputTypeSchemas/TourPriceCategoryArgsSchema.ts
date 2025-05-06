import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourPriceCategorySelectSchema } from '../inputTypeSchemas/TourPriceCategorySelectSchema';
import { TourPriceCategoryIncludeSchema } from '../inputTypeSchemas/TourPriceCategoryIncludeSchema';

export const TourPriceCategoryArgsSchema: z.ZodType<Prisma.TourPriceCategoryDefaultArgs> = z.object({
  select: z.lazy(() => TourPriceCategorySelectSchema).optional(),
  include: z.lazy(() => TourPriceCategoryIncludeSchema).optional(),
}).strict();

export default TourPriceCategoryArgsSchema;
