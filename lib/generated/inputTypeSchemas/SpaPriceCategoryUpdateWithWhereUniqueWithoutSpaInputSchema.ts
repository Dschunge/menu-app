import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryWhereUniqueInputSchema } from './SpaPriceCategoryWhereUniqueInputSchema';
import { SpaPriceCategoryUpdateWithoutSpaInputSchema } from './SpaPriceCategoryUpdateWithoutSpaInputSchema';
import { SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema';

export const SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema: z.ZodType<Prisma.SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInput> = z.object({
  where: z.lazy(() => SpaPriceCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpaPriceCategoryUpdateWithoutSpaInputSchema),z.lazy(() => SpaPriceCategoryUncheckedUpdateWithoutSpaInputSchema) ]),
}).strict();

export default SpaPriceCategoryUpdateWithWhereUniqueWithoutSpaInputSchema;
