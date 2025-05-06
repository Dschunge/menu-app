import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutTableInputSchema } from './ReservationCreateWithoutTableInputSchema';
import { ReservationUncheckedCreateWithoutTableInputSchema } from './ReservationUncheckedCreateWithoutTableInputSchema';
import { ReservationCreateOrConnectWithoutTableInputSchema } from './ReservationCreateOrConnectWithoutTableInputSchema';
import { ReservationCreateManyTableInputEnvelopeSchema } from './ReservationCreateManyTableInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';

export const ReservationCreateNestedManyWithoutTableInputSchema: z.ZodType<Prisma.ReservationCreateNestedManyWithoutTableInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutTableInputSchema),z.lazy(() => ReservationCreateWithoutTableInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutTableInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutTableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyTableInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReservationCreateNestedManyWithoutTableInputSchema;
