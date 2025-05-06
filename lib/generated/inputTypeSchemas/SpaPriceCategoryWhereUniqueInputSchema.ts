import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryWhereInputSchema } from './SpaPriceCategoryWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SpaNullableScalarRelationFilterSchema } from './SpaNullableScalarRelationFilterSchema';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';

export const SpaPriceCategoryWhereUniqueInputSchema: z.ZodType<Prisma.SpaPriceCategoryWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => SpaPriceCategoryWhereInputSchema),z.lazy(() => SpaPriceCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpaPriceCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpaPriceCategoryWhereInputSchema),z.lazy(() => SpaPriceCategoryWhereInputSchema).array() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  spaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  spa: z.union([ z.lazy(() => SpaNullableScalarRelationFilterSchema),z.lazy(() => SpaWhereInputSchema) ]).optional().nullable(),
}).strict());

export default SpaPriceCategoryWhereUniqueInputSchema;
