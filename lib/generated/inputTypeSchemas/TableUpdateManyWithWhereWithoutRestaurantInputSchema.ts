import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableScalarWhereInputSchema } from './TableScalarWhereInputSchema';
import { TableUpdateManyMutationInputSchema } from './TableUpdateManyMutationInputSchema';
import { TableUncheckedUpdateManyWithoutRestaurantInputSchema } from './TableUncheckedUpdateManyWithoutRestaurantInputSchema';

export const TableUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.TableUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => TableScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TableUpdateManyMutationInputSchema),z.lazy(() => TableUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default TableUpdateManyWithWhereWithoutRestaurantInputSchema;
