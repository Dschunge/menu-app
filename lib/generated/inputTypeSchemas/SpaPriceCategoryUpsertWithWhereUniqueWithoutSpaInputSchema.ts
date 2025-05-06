import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryWhereUniqueInputSchema } from './SpaPriceCategoryWhereUniqueInputSchema';
import { SpaPriceCategoryUpdateWithoutSpaInputSchema } from './SpaPriceCategoryUpdateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema';
import { SpaPriceCategoryCreateWithoutSpaInputSchema } from './SpaPriceCategoryCreateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema';

export const SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema: z.ZodType<Prisma.SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInput> = z.object({
  where: z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpaPriceCategoryUpdateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema) ]),
  create: z.union([ z.lazy(() => SpaPriceCategoryCreateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedCreateWithoutSpaInputSchema) ]),
}).strict();

export default SpaPriceCategoryUpsertWithWhereUniqueWithoutSpaInputSchema;
