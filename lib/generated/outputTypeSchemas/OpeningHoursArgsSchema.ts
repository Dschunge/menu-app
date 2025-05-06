import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { OpeningHoursSelectSchema } from '../inputTypeSchemas/OpeningHoursSelectSchema';
import { OpeningHoursIncludeSchema } from '../inputTypeSchemas/OpeningHoursIncludeSchema';

export const OpeningHoursArgsSchema: z.ZodType<Prisma.OpeningHoursDefaultArgs> = z.object({
  select: z.lazy(() => OpeningHoursSelectSchema).optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
}).strict();

export default OpeningHoursArgsSchema;
