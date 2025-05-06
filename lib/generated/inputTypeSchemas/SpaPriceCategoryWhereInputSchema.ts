import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SpaNullableScalarRelationFilterSchema } from './SpaNullableScalarRelationFilterSchema';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';

export const SpaPriceCategoryWhereInputSchema: z.ZodType<Prisma.SpaPriceCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SpaPriceCategoryWhereInputSchema),z.lazy(() => SpaPriceCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpaPriceCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpaPriceCategoryWhereInputSchema),z.lazy(() => SpaPriceCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  spaId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  spa: z.union([ z.lazy(() => SpaNullableScalarRelationFilterSchema),z.lazy(() => SpaWhereInputSchema) ]).optional().nullable(),
}).strict();

export default SpaPriceCategoryWhereInputSchema;
