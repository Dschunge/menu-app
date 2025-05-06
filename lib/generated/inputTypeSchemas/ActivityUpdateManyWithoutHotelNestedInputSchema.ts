import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityCreateWithoutHotelInputSchema } from './ActivityCreateWithoutHotelInputSchema';
import { ActivityUncheckedCreateWithoutHotelInputSchema } from './ActivityUncheckedCreateWithoutHotelInputSchema';
import { ActivityCreateOrConnectWithoutHotelInputSchema } from './ActivityCreateOrConnectWithoutHotelInputSchema';
import { ActivityUpsertWithWhereUniqueWithoutHotelInputSchema } from './ActivityUpsertWithWhereUniqueWithoutHotelInputSchema';
import { ActivityCreateManyHotelInputEnvelopeSchema } from './ActivityCreateManyHotelInputEnvelopeSchema';
import { ActivityWhereUniqueInputSchema } from './ActivityWhereUniqueInputSchema';
import { ActivityUpdateWithWhereUniqueWithoutHotelInputSchema } from './ActivityUpdateWithWhereUniqueWithoutHotelInputSchema';
import { ActivityUpdateManyWithWhereWithoutHotelInputSchema } from './ActivityUpdateManyWithWhereWithoutHotelInputSchema';
import { ActivityScalarWhereInputSchema } from './ActivityScalarWhereInputSchema';

export const ActivityUpdateManyWithoutHotelNestedInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithoutHotelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ActivityCreateWithoutHotelInputSchema),z.lazy(() => ActivityCreateWithoutHotelInputSchema).array(),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ActivityCreateOrConnectWithoutHotelInputSchema),z.lazy(() => ActivityCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ActivityUpsertWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => ActivityUpsertWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ActivityCreateManyHotelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ActivityWhereUniqueInputSchema),z.lazy(() => ActivityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ActivityWhereUniqueInputSchema),z.lazy(() => ActivityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ActivityWhereUniqueInputSchema),z.lazy(() => ActivityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ActivityWhereUniqueInputSchema),z.lazy(() => ActivityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ActivityUpdateWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => ActivityUpdateWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ActivityUpdateManyWithWhereWithoutHotelInputSchema),z.lazy(() => ActivityUpdateManyWithWhereWithoutHotelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ActivityScalarWhereInputSchema),z.lazy(() => ActivityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ActivityUpdateManyWithoutHotelNestedInputSchema;
