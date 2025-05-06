import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryWhereUniqueInputSchema } from './SpaPriceCategoryWhereUniqueInputSchema';
import { SpaPriceCategoryCreateWithoutSpaInputSchema } from './SpaPriceCategoryCreateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema';

export const SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema: z.ZodType<Prisma.SpaPriceCategoryCreateOrConnectWithoutSpaInput> = z.object({
  where: z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema) ]),
}).strict();

export default SpaPriceCategoryCreateOrConnectWithoutSpaInputSchema;
