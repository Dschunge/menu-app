import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaCreateWithoutPricecategoryInputSchema } from './SpaCreateWithoutPricecategoryInputSchema';
import { SpaUncheckedCreateWithoutPricecategoryInputSchema } from './SpaUncheckedCreateWithoutPricecategoryInputSchema';

export const SpaCreateOrConnectWithoutPricecategoryInputSchema: z.ZodType<Prisma.SpaCreateOrConnectWithoutPricecategoryInput> = z.object({
  where: z.lazy(() => SpaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpaCreateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedCreateWithoutPricecategoryInputSchema) ]),
}).strict();

export default SpaCreateOrConnectWithoutPricecategoryInputSchema;
