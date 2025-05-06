import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TourNullableScalarRelationFilterSchema } from './TourNullableScalarRelationFilterSchema';
import { TourWhereInputSchema } from './TourWhereInputSchema';

export const TourPriceCategoryWhereInputSchema: z.ZodType<Prisma.TourPriceCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourPriceCategoryWhereInputSchema),z.lazy(() => TourPriceCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourPriceCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourPriceCategoryWhereInputSchema),z.lazy(() => TourPriceCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tourId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Tour: z.union([ z.lazy(() => TourNullableScalarRelationFilterSchema),z.lazy(() => TourWhereInputSchema) ]).optional().nullable(),
}).strict();

export default TourPriceCategoryWhereInputSchema;
