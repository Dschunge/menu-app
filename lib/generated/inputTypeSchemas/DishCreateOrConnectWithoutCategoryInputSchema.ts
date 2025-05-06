import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishCreateWithoutCategoryInputSchema } from './DishCreateWithoutCategoryInputSchema';
import { DishUncheckedCreateWithoutCategoryInputSchema } from './DishUncheckedCreateWithoutCategoryInputSchema';

export const DishCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DishCreateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default DishCreateOrConnectWithoutCategoryInputSchema;
