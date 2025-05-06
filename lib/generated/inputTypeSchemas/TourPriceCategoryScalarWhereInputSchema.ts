import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TourPriceCategoryScalarWhereInputSchema: z.ZodType<Prisma.TourPriceCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourPriceCategoryScalarWhereInputSchema),z.lazy(() => TourPriceCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourPriceCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourPriceCategoryScalarWhereInputSchema),z.lazy(() => TourPriceCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tourId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TourPriceCategoryScalarWhereInputSchema;
