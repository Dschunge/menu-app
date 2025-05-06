import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutReservationsInputSchema } from './CustomerCreateWithoutReservationsInputSchema';
import { CustomerUncheckedCreateWithoutReservationsInputSchema } from './CustomerUncheckedCreateWithoutReservationsInputSchema';
import { CustomerCreateOrConnectWithoutReservationsInputSchema } from './CustomerCreateOrConnectWithoutReservationsInputSchema';
import { CustomerUpsertWithoutReservationsInputSchema } from './CustomerUpsertWithoutReservationsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutReservationsInputSchema } from './CustomerUpdateToOneWithWhereWithoutReservationsInputSchema';
import { CustomerUpdateWithoutReservationsInputSchema } from './CustomerUpdateWithoutReservationsInputSchema';
import { CustomerUncheckedUpdateWithoutReservationsInputSchema } from './CustomerUncheckedUpdateWithoutReservationsInputSchema';

export const CustomerUpdateOneRequiredWithoutReservationsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReservationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutReservationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReservationsInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutReservationsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutReservationsInputSchema),z.lazy(() => CustomerUpdateWithoutReservationsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutReservationsInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneRequiredWithoutReservationsNestedInputSchema;
