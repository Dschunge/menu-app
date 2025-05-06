import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumAMENITIESTYPEWithAggregatesFilterSchema } from './EnumAMENITIESTYPEWithAggregatesFilterSchema';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AmenitiesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AmenitiesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AmenitiesScalarWhereWithAggregatesInputSchema),z.lazy(() => AmenitiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmenitiesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmenitiesScalarWhereWithAggregatesInputSchema),z.lazy(() => AmenitiesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amenitiestype: z.union([ z.lazy(() => EnumAMENITIESTYPEWithAggregatesFilterSchema),z.lazy(() => AMENITIESTYPESchema) ]).optional(),
  hotelId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AmenitiesScalarWhereWithAggregatesInputSchema;
