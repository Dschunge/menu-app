import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';

export const SpaListRelationFilterSchema: z.ZodType<Prisma.SpaListRelationFilter> = z.object({
  every: z.lazy(() => SpaWhereInputSchema).optional(),
  some: z.lazy(() => SpaWhereInputSchema).optional(),
  none: z.lazy(() => SpaWhereInputSchema).optional()
}).strict();

export default SpaListRelationFilterSchema;
