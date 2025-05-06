import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AmenitiesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AmenitiesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AmenitiesOrderByRelationAggregateInputSchema;
