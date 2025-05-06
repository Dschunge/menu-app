import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelArgsSchema } from "../outputTypeSchemas/HotelArgsSchema"

export const ActivitySelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  name_esp: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  image: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  hotelId: z.boolean().optional(),
  type: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  price: z.boolean().optional(),
  cashOnly: z.boolean().optional(),
  freeOfCharge: z.boolean().optional(),
  location: z.boolean().optional(),
  isRecurring: z.boolean().optional(),
  recurrencePattern: z.boolean().optional(),
  recurrenceDays: z.boolean().optional(),
  recurrenceEndDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Hotel: z.union([z.boolean(),z.lazy(() => HotelArgsSchema)]).optional(),
}).strict()

export default ActivitySelectSchema;
