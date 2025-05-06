import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableCreateWithoutRestaurantInputSchema } from './TableCreateWithoutRestaurantInputSchema';
import { TableUncheckedCreateWithoutRestaurantInputSchema } from './TableUncheckedCreateWithoutRestaurantInputSchema';

export const TableCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.TableCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => TableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TableCreateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default TableCreateOrConnectWithoutRestaurantInputSchema;
