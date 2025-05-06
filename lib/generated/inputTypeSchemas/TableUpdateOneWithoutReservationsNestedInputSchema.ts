import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableCreateWithoutReservationsInputSchema } from './TableCreateWithoutReservationsInputSchema';
import { TableUncheckedCreateWithoutReservationsInputSchema } from './TableUncheckedCreateWithoutReservationsInputSchema';
import { TableCreateOrConnectWithoutReservationsInputSchema } from './TableCreateOrConnectWithoutReservationsInputSchema';
import { TableUpsertWithoutReservationsInputSchema } from './TableUpsertWithoutReservationsInputSchema';
import { TableWhereInputSchema } from './TableWhereInputSchema';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableUpdateToOneWithWhereWithoutReservationsInputSchema } from './TableUpdateToOneWithWhereWithoutReservationsInputSchema';
import { TableUpdateWithoutReservationsInputSchema } from './TableUpdateWithoutReservationsInputSchema';
import { TableUncheckedUpdateWithoutReservationsInputSchema } from './TableUncheckedUpdateWithoutReservationsInputSchema';

export const TableUpdateOneWithoutReservationsNestedInputSchema: z.ZodType<Prisma.TableUpdateOneWithoutReservationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TableCreateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TableCreateOrConnectWithoutReservationsInputSchema).optional(),
  upsert: z.lazy(() => TableUpsertWithoutReservationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TableWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TableWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TableWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TableUpdateToOneWithWhereWithoutReservationsInputSchema),z.lazy(() => TableUpdateWithoutReservationsInputSchema),z.lazy(() => TableUncheckedUpdateWithoutReservationsInputSchema) ]).optional(),
}).strict();

export default TableUpdateOneWithoutReservationsNestedInputSchema;
