import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableCreateWithoutReservationsInputSchema } from './TableCreateWithoutReservationsInputSchema';
import { TableUncheckedCreateWithoutReservationsInputSchema } from './TableUncheckedCreateWithoutReservationsInputSchema';

export const TableCreateOrConnectWithoutReservationsInputSchema: z.ZodType<Prisma.TableCreateOrConnectWithoutReservationsInput> = z.object({
  where: z.lazy(() => TableWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TableCreateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedCreateWithoutReservationsInputSchema) ]),
}).strict();

export default TableCreateOrConnectWithoutReservationsInputSchema;
