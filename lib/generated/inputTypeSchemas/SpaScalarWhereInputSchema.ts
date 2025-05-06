import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SpaScalarWhereInputSchema: z.ZodType<Prisma.SpaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SpaScalarWhereInputSchema),z.lazy(() => SpaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpaScalarWhereInputSchema),z.lazy(() => SpaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  videos: z.lazy(() => StringNullableListFilterSchema).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SpaScalarWhereInputSchema;
