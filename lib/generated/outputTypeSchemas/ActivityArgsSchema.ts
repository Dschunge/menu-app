import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ActivitySelectSchema } from '../inputTypeSchemas/ActivitySelectSchema';
import { ActivityIncludeSchema } from '../inputTypeSchemas/ActivityIncludeSchema';

export const ActivityArgsSchema: z.ZodType<Prisma.ActivityDefaultArgs> = z.object({
  select: z.lazy(() => ActivitySelectSchema).optional(),
  include: z.lazy(() => ActivityIncludeSchema).optional(),
}).strict();

export default ActivityArgsSchema;
