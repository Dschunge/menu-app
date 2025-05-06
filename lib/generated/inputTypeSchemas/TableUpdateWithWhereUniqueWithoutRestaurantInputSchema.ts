import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableUpdateWithoutRestaurantInputSchema } from './TableUpdateWithoutRestaurantInputSchema';
import { TableUncheckedUpdateWithoutRestaurantInputSchema } from './TableUncheckedUpdateWithoutRestaurantInputSchema';

export const TableUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.TableUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => TableWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TableUpdateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default TableUpdateWithWhereUniqueWithoutRestaurantInputSchema;
