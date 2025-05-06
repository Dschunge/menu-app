import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { TableArgsSchema } from "../outputTypeSchemas/TableArgsSchema"
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const ReservationSelectSchema: z.ZodType<Prisma.ReservationSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  partySize: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  customerId: z.boolean().optional(),
  tableId: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  table: z.union([z.boolean(),z.lazy(() => TableArgsSchema)]).optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default ReservationSelectSchema;
