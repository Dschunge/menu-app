import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const ActivityCreaterecurrenceDaysInputSchema: z.ZodType<Prisma.ActivityCreaterecurrenceDaysInput> = z.object({
  set: z.string().array()
}).strict();

export default ActivityCreaterecurrenceDaysInputSchema;
