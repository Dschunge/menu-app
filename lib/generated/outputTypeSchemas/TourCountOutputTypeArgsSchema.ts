import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourCountOutputTypeSelectSchema } from './TourCountOutputTypeSelectSchema';

export const TourCountOutputTypeArgsSchema: z.ZodType<Prisma.TourCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TourCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TourCountOutputTypeSelectSchema;
