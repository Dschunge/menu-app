import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateWithoutPricecategoryInputSchema } from './SpaCreateWithoutPricecategoryInputSchema';
import { SpaUncheckedCreateWithoutPricecategoryInputSchema } from './SpaUncheckedCreateWithoutPricecategoryInputSchema';
import { SpaCreateOrConnectWithoutPricecategoryInputSchema } from './SpaCreateOrConnectWithoutPricecategoryInputSchema';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';

export const SpaCreateNestedOneWithoutPricecategoryInputSchema: z.ZodType<Prisma.SpaCreateNestedOneWithoutPricecategoryInput> = z.object({
  create: z.union([ z.lazy(() => SpaCreateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedCreateWithoutPricecategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpaCreateOrConnectWithoutPricecategoryInputSchema).optional(),
  connect: z.lazy(() => SpaWhereUniqueInputSchema).optional()
}).strict();

export default SpaCreateNestedOneWithoutPricecategoryInputSchema;
