import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaSelectSchema } from '../inputTypeSchemas/SpaSelectSchema';
import { SpaIncludeSchema } from '../inputTypeSchemas/SpaIncludeSchema';

export const SpaArgsSchema: z.ZodType<Prisma.SpaDefaultArgs> = z.object({
  select: z.lazy(() => SpaSelectSchema).optional(),
  include: z.lazy(() => SpaIncludeSchema).optional(),
}).strict();

export default SpaArgsSchema;
