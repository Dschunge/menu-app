import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateWithoutHotelInputSchema } from './SpaCreateWithoutHotelInputSchema';
import { SpaUncheckedCreateWithoutHotelInputSchema } from './SpaUncheckedCreateWithoutHotelInputSchema';
import { SpaCreateOrConnectWithoutHotelInputSchema } from './SpaCreateOrConnectWithoutHotelInputSchema';
import { SpaUpsertWithWhereUniqueWithoutHotelInputSchema } from './SpaUpsertWithWhereUniqueWithoutHotelInputSchema';
import { SpaCreateManyHotelInputEnvelopeSchema } from './SpaCreateManyHotelInputEnvelopeSchema';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaUpdateWithWhereUniqueWithoutHotelInputSchema } from './SpaUpdateWithWhereUniqueWithoutHotelInputSchema';
import { SpaUpdateManyWithWhereWithoutHotelInputSchema } from './SpaUpdateManyWithWhereWithoutHotelInputSchema';
import { SpaScalarWhereInputSchema } from './SpaScalarWhereInputSchema';

export const SpaUpdateManyWithoutHotelNestedInputSchema: z.ZodType<Prisma.SpaUpdateManyWithoutHotelNestedInput> = z.object({
  create: z.union([ z.lazy(() => SpaCreateWithoutHotelInputSchema),z.lazy(() => SpaCreateWithoutHotelInputSchema).array(),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpaCreateOrConnectWithoutHotelInputSchema),z.lazy(() => SpaCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpaUpsertWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => SpaUpsertWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpaCreateManyHotelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpaWhereUniqueInputSchema),z.lazy(() => SpaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpaWhereUniqueInputSchema),z.lazy(() => SpaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpaWhereUniqueInputSchema),z.lazy(() => SpaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpaWhereUniqueInputSchema),z.lazy(() => SpaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpaUpdateWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => SpaUpdateWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpaUpdateManyWithWhereWithoutHotelInputSchema),z.lazy(() => SpaUpdateManyWithWhereWithoutHotelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpaScalarWhereInputSchema),z.lazy(() => SpaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SpaUpdateManyWithoutHotelNestedInputSchema;
