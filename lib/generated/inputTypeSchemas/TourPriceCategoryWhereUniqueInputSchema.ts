import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourPriceCategoryWhereInputSchema } from './TourPriceCategoryWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TourNullableScalarRelationFilterSchema } from './TourNullableScalarRelationFilterSchema';
import { TourWhereInputSchema } from './TourWhereInputSchema';

export const TourPriceCategoryWhereUniqueInputSchema: z.ZodType<Prisma.TourPriceCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    sku: z.number().int()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    sku: z.number().int(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  sku: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TourPriceCategoryWhereInputSchema),z.lazy(() => TourPriceCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourPriceCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourPriceCategoryWhereInputSchema),z.lazy(() => TourPriceCategoryWhereInputSchema).array() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tourId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Tour: z.union([ z.lazy(() => TourNullableScalarRelationFilterSchema),z.lazy(() => TourWhereInputSchema) ]).optional().nullable(),
}).strict());

export default TourPriceCategoryWhereUniqueInputSchema;
