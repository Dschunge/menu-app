import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const OpeningHoursSelectSchema: z.ZodType<Prisma.OpeningHoursSelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  openTime: z.boolean().optional(),
  closeTime: z.boolean().optional(),
  isClosed: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default OpeningHoursSelectSchema;
