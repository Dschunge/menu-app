import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const OpeningHoursScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OpeningHoursScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema),z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema),z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  openTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  closeTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isClosed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default OpeningHoursScalarWhereWithAggregatesInputSchema;
