import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryCreateWithoutSpaInputSchema } from './SpaPriceCategoryCreateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema';
import { SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema } from './SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema';
import { SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema } from './SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema';
import { SpaPriceCategoryCreateManySpaInputEnvelopeSchema } from './SpaPriceCategoryCreateManySpaInputEnvelopeSchema';
import { SpaPriceCategoryWhereUniqueInputSchema } from './SpaPriceCategoryWhereUniqueInputSchema';
import { SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema } from './SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema';
import { SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema } from './SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema';
import { SpaPriceCategoryScalarWhereInputSchema } from './SpaPriceCategoryScalarWhereInputSchema';

export const SpaPriceCategoryUpdateManyWithoutSpaNestedInputSchema: z.ZodType<Prisma.SpaPriceCategoryUpdateManyWithoutSpaNestedInput> = z.object({
  create: z.union([ z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema).array(),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpaPriceCategoryCreateManySpaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SpaPriceCategoryScalarWhereInputSchema),z.lazy(() => SpaPriceCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SpaPriceCategoryUpdateManyWithoutSpaNestedInputSchema;
