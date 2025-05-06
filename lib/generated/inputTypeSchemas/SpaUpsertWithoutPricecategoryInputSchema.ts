import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaUpdateWithoutPricecategoryInputSchema } from './SpaUpdateWithoutPricecategoryInputSchema';
import { SpaUncheckedUpdateWithoutPricecategoryInputSchema } from './SpaUncheckedUpdateWithoutPricecategoryInputSchema';
import { SpaCreateWithoutPricecategoryInputSchema } from './SpaCreateWithoutPricecategoryInputSchema';
import { SpaUncheckedCreateWithoutPricecategoryInputSchema } from './SpaUncheckedCreateWithoutPricecategoryInputSchema';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';

export const SpaUpsertWithoutPricecategoryInputSchema: z.ZodType<Prisma.SpaUpsertWithoutPricecategoryInput> = z.object({
  update: z.union([ z.lazy(() => SpaUpdateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedUpdateWithoutPricecategoryInputSchema) ]),
  create: z.union([ z.lazy(() => SpaCreateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedCreateWithoutPricecategoryInputSchema) ]),
  where: z.lazy(() => SpaWhereInputSchema).optional()
}).strict();

export default SpaUpsertWithoutPricecategoryInputSchema;
