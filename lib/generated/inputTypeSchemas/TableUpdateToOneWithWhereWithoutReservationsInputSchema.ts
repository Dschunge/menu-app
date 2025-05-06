import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereInputSchema } from './TableWhereInputSchema';
import { TableUpdateWithoutReservationsInputSchema } from './TableUpdateWithoutReservationsInputSchema';
import { TableUncheckedUpdateWithoutReservationsInputSchema } from './TableUncheckedUpdateWithoutReservationsInputSchema';

export const TableUpdateToOneWithWhereWithoutReservationsInputSchema: z.ZodType<Prisma.TableUpdateToOneWithWhereWithoutReservationsInput> = z.object({
  where: z.lazy(() => TableWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TableUpdateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedUpdateWithoutReservationsInputSchema) ]),
}).strict();

export default TableUpdateToOneWithWhereWithoutReservationsInputSchema;
