import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutCategoryInputSchema } from './DishUpdateWithoutCategoryInputSchema';
import { DishUncheckedUpdateWithoutCategoryInputSchema } from './DishUncheckedUpdateWithoutCategoryInputSchema';

export const DishUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DishUpdateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default DishUpdateWithWhereUniqueWithoutCategoryInputSchema;
