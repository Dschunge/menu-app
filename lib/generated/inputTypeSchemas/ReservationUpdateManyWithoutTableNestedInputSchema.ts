import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationCreateWithoutTableInputSchema } from './ReservationCreateWithoutTableInputSchema';
import { ReservationUncheckedCreateWithoutTableInputSchema } from './ReservationUncheckedCreateWithoutTableInputSchema';
import { ReservationCreateOrConnectWithoutTableInputSchema } from './ReservationCreateOrConnectWithoutTableInputSchema';
import { ReservationUpsertWithWhereUniqueWithoutTableInputSchema } from './ReservationUpsertWithWhereUniqueWithoutTableInputSchema';
import { ReservationCreateManyTableInputEnvelopeSchema } from './ReservationCreateManyTableInputEnvelopeSchema';
import { ReservationWhereUniqueInputSchema } from './ReservationWhereUniqueInputSchema';
import { ReservationUpdateWithWhereUniqueWithoutTableInputSchema } from './ReservationUpdateWithWhereUniqueWithoutTableInputSchema';
import { ReservationUpdateManyWithWhereWithoutTableInputSchema } from './ReservationUpdateManyWithWhereWithoutTableInputSchema';
import { ReservationScalarWhereInputSchema } from './ReservationScalarWhereInputSchema';

export const ReservationUpdateManyWithoutTableNestedInputSchema: z.ZodType<Prisma.ReservationUpdateManyWithoutTableNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReservationCreateWithoutTableInputSchema),z.lazy(() => ReservationCreateWithoutTableInputSchema).array(),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema),z.lazy(() => ReservationUncheckedCreateWithoutTableInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReservationCreateOrConnectWithoutTableInputSchema),z.lazy(() => ReservationCreateOrConnectWithoutTableInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReservationUpsertWithWhereUniqueWithoutTableInputSchema),z.lazy(() => ReservationUpsertWithWhereUniqueWithoutTableInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReservationCreateManyTableInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReservationWhereUniqueInputSchema),z.lazy(() => ReservationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReservationUpdateWithWhereUniqueWithoutTableInputSchema),z.lazy(() => ReservationUpdateWithWhereUniqueWithoutTableInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReservationUpdateManyWithWhereWithoutTableInputSchema),z.lazy(() => ReservationUpdateManyWithWhereWithoutTableInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReservationScalarWhereInputSchema),z.lazy(() => ReservationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReservationUpdateManyWithoutTableNestedInputSchema;
