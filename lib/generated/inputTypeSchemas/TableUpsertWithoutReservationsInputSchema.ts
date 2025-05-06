import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableUpdateWithoutReservationsInputSchema } from './TableUpdateWithoutReservationsInputSchema';
import { TableUncheckedUpdateWithoutReservationsInputSchema } from './TableUncheckedUpdateWithoutReservationsInputSchema';
import { TableCreateWithoutReservationsInputSchema } from './TableCreateWithoutReservationsInputSchema';
import { TableUncheckedCreateWithoutReservationsInputSchema } from './TableUncheckedCreateWithoutReservationsInputSchema';
import { TableWhereInputSchema } from './TableWhereInputSchema';

export const TableUpsertWithoutReservationsInputSchema: z.ZodType<Prisma.TableUpsertWithoutReservationsInput> = z.object({
  update: z.union([ z.lazy(() => TableUpdateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedUpdateWithoutReservationsInputSchema) ]),
  create: z.union([ z.lazy(() => TableCreateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedCreateWithoutReservationsInputSchema) ]),
  where: z.lazy(() => TableWhereInputSchema).optional()
}).strict();

export default TableUpsertWithoutReservationsInputSchema;
