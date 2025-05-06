import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SpaCreateimagesInputSchema: z.ZodType<Prisma.SpaCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export default SpaCreateimagesInputSchema;
