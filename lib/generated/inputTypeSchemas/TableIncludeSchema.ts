import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { ReservationFindManyArgsSchema } from "../outputTypeSchemas/ReservationFindManyArgsSchema"
import { TableCountOutputTypeArgsSchema } from "../outputTypeSchemas/TableCountOutputTypeArgsSchema"

export const TableIncludeSchema: z.ZodType<Prisma.TableInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  reservations: z.union([z.boolean(),z.lazy(() => ReservationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TableCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TableIncludeSchema;
