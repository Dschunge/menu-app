import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAMENITIESTYPEFilterSchema } from './EnumAMENITIESTYPEFilterSchema';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AmenitiesScalarWhereInputSchema: z.ZodType<Prisma.AmenitiesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AmenitiesScalarWhereInputSchema),z.lazy(() => AmenitiesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmenitiesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmenitiesScalarWhereInputSchema),z.lazy(() => AmenitiesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amenitiestype: z.union([ z.lazy(() => EnumAMENITIESTYPEFilterSchema),z.lazy(() => AMENITIESTYPESchema) ]).optional(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default AmenitiesScalarWhereInputSchema;
