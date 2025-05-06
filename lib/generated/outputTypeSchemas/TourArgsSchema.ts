import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourSelectSchema } from '../inputTypeSchemas/TourSelectSchema';
import { TourIncludeSchema } from '../inputTypeSchemas/TourIncludeSchema';

export const TourArgsSchema: z.ZodType<Prisma.TourDefaultArgs> = z.object({
  select: z.lazy(() => TourSelectSchema).optional(),
  include: z.lazy(() => TourIncludeSchema).optional(),
}).strict();

export default TourArgsSchema;
