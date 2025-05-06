import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursCreateWithoutRestaurantInputSchema } from './OpeningHoursCreateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedCreateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedCreateWithoutRestaurantInputSchema';
import { OpeningHoursCreateOrConnectWithoutRestaurantInputSchema } from './OpeningHoursCreateOrConnectWithoutRestaurantInputSchema';
import { OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { OpeningHoursCreateManyRestaurantInputEnvelopeSchema } from './OpeningHoursCreateManyRestaurantInputEnvelopeSchema';
import { OpeningHoursWhereUniqueInputSchema } from './OpeningHoursWhereUniqueInputSchema';
import { OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema } from './OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema';
import { OpeningHoursScalarWhereInputSchema } from './OpeningHoursScalarWhereInputSchema';

export const OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.OpeningHoursUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OpeningHoursUpdateManyWithoutRestaurantNestedInputSchema;
