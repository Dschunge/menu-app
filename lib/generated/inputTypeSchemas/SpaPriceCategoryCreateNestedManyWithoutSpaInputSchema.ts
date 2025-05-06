import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryCreateWithoutSpaInputSchema } from './SpaPriceCategoryCreateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema';
import { SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema } from './SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema';
import { SpaPriceCategoryCreateManySpaInputEnvelopeSchema } from './SpaPriceCategoryCreateManySpaInputEnvelopeSchema';
import { SpaPriceCategoryWhereUniqueInputSchema } from './SpaPriceCategoryWhereUniqueInputSchema';

export const SpaPriceCategoryCreateNestedManyWithoutSpaInputSchema: z.ZodType<Prisma.SpaPriceCategoryCreateNestedManyWithoutSpaInput> = z.object({
  create: z.union([ z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema).array(),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpaPriceCategoryCreateManySpaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SpaPriceCategoryCreateNestedManyWithoutSpaInputSchema;
