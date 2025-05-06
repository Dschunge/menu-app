import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerScalarRelationFilterSchema: z.ZodType<Prisma.CustomerScalarRelationFilter> = z.object({
  is: z.lazy(() => CustomerWhereInputSchema).optional(),
  isNot: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerScalarRelationFilterSchema;
