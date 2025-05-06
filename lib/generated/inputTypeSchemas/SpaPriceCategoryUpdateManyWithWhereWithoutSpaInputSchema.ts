import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaPriceCategoryScalarWhereInputSchema } from './SpaPriceCategoryScalarWhereInputSchema';
import { SpaPriceCategoryUpdateManyMutationInputSchema } from './SpaPriceCategoryUpdateManyMutationInputSchema';
import { SpaPriceCategoryUncheckedUpdateManyWithoutSpaInputSchema } from './SpaPriceCategoryUncheckedUpdateManyWithoutSpaInputSchema';

export const SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema: z.ZodType<Prisma.SpaPriceCategoryUpdateManyWithWhereWithoutSpaInput> = z.object({
  where: z.lazy(() => SpaPriceCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpaPriceCategoryUpdateManyMutationInputSchema),z.lazy(() => SpaPriceCategoryUncheckedUpdateManyWithoutSpaInputSchema) ]),
}).strict();

export default SpaPriceCategoryUpdateManyWithWhereWithoutSpaInputSchema;
