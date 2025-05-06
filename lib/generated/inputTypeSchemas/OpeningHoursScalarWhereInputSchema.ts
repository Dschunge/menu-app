import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const OpeningHoursScalarWhereInputSchema: z.ZodType<Prisma.OpeningHoursScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  openTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closeTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isClosed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  restaurantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default OpeningHoursScalarWhereInputSchema;
