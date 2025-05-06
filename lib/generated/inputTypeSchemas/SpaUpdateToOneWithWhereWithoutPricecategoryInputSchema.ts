import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';
import { SpaUpdateWithoutPricecategoryInputSchema } from './SpaUpdateWithoutPricecategoryInputSchema';
import { SpaUncheckedUpdateWithoutPricecategoryInputSchema } from './SpaUncheckedUpdateWithoutPricecategoryInputSchema';

export const SpaUpdateToOneWithWhereWithoutPricecategoryInputSchema: z.ZodType<Prisma.SpaUpdateToOneWithWhereWithoutPricecategoryInput> = z.object({
  where: z.lazy(() => SpaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SpaUpdateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedUpdateWithoutPricecategoryInputSchema) ]),
}).strict();

export default SpaUpdateToOneWithWhereWithoutPricecategoryInputSchema;
