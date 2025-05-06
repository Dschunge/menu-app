import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';
import { ActivityCreaterecurrenceDaysInputSchema } from './ActivityCreaterecurrenceDaysInputSchema';

export const ActivityCreateWithoutHotelInputSchema: z.ZodType<Prisma.ActivityCreateWithoutHotelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  name_esp: z.string().optional(),
  description: z.string().optional(),
  description_esp: z.string().optional(),
  image: z.string().optional(),
  profileImage: z.string().optional().nullable(),
  type: z.string().optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  price: z.number().int(),
  cashOnly: z.boolean().optional(),
  freeOfCharge: z.boolean().optional(),
  location: z.string().optional(),
  isRecurring: z.boolean().optional(),
  recurrencePattern: z.lazy(() => RECURRINGPATTERNSchema).optional(),
  recurrenceDays: z.union([ z.lazy(() => ActivityCreaterecurrenceDaysInputSchema),z.string().array() ]).optional(),
  recurrenceEndDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ActivityCreateWithoutHotelInputSchema;
