import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableUpdateWithoutRestaurantInputSchema } from './TableUpdateWithoutRestaurantInputSchema';
import { TableUncheckedUpdateWithoutRestaurantInputSchema } from './TableUncheckedUpdateWithoutRestaurantInputSchema';
import { TableCreateWithoutRestaurantInputSchema } from './TableCreateWithoutRestaurantInputSchema';
import { TableUncheckedCreateWithoutRestaurantInputSchema } from './TableUncheckedCreateWithoutRestaurantInputSchema';

export const TableUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.TableUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => TableWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TableUpdateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => TableCreateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default TableUpsertWithWhereUniqueWithoutRestaurantInputSchema;
