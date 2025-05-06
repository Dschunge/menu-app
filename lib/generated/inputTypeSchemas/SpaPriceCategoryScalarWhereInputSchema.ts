import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SpaPriceCategoryScalarWhereInputSchema: z.ZodType<Prisma.SpaPriceCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SpaPriceCategoryScalarWhereInputSchema),z.lazy(() => SpaPriceCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpaPriceCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpaPriceCategoryScalarWhereInputSchema),z.lazy(() => SpaPriceCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  spaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SpaPriceCategoryScalarWhereInputSchema;
