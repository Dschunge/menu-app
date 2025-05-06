import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { TableArgsSchema } from "../outputTypeSchemas/TableArgsSchema"
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const ReservationIncludeSchema: z.ZodType<Prisma.ReservationInclude> = z.object({
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  table: z.union([z.boolean(),z.lazy(() => TableArgsSchema)]).optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default ReservationIncludeSchema;
