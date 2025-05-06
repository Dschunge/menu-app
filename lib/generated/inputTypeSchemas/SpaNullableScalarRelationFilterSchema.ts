import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';

export const SpaNullableScalarRelationFilterSchema: z.ZodType<Prisma.SpaNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SpaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SpaWhereInputSchema).optional().nullable()
}).strict();

export default SpaNullableScalarRelationFilterSchema;
