import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableCreateWithoutReservationsInputSchema } from './TableCreateWithoutReservationsInputSchema';
import { TableUncheckedCreateWithoutReservationsInputSchema } from './TableUncheckedCreateWithoutReservationsInputSchema';
import { TableCreateOrConnectWithoutReservationsInputSchema } from './TableCreateOrConnectWithoutReservationsInputSchema';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';

export const TableCreateNestedOneWithoutReservationsInputSchema: z.ZodType<Prisma.TableCreateNestedOneWithoutReservationsInput> = z.object({
  create: z.union([ z.lazy(() => TableCreateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TableCreateOrConnectWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => TableWhereUniqueInputSchema).optional()
}).strict();

export default TableCreateNestedOneWithoutReservationsInputSchema;
