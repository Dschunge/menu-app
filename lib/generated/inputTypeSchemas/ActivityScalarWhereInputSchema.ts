import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumRECURRINGPATTERNFilterSchema } from './EnumRECURRINGPATTERNFilterSchema';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const ActivityScalarWhereInputSchema: z.ZodType<Prisma.ActivityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ActivityScalarWhereInputSchema),z.lazy(() => ActivityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ActivityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ActivityScalarWhereInputSchema),z.lazy(() => ActivityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description_esp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hotelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cashOnly: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  freeOfCharge: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isRecurring: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  recurrencePattern: z.union([ z.lazy(() => EnumRECURRINGPATTERNFilterSchema),z.lazy(() => RECURRINGPATTERNSchema) ]).optional(),
  recurrenceDays: z.lazy(() => StringNullableListFilterSchema).optional(),
  recurrenceEndDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ActivityScalarWhereInputSchema;
