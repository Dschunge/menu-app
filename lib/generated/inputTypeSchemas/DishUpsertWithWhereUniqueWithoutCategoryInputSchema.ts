import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutCategoryInputSchema } from './DishUpdateWithoutCategoryInputSchema';
import { DishUncheckedUpdateWithoutCategoryInputSchema } from './DishUncheckedUpdateWithoutCategoryInputSchema';
import { DishCreateWithoutCategoryInputSchema } from './DishCreateWithoutCategoryInputSchema';
import { DishUncheckedCreateWithoutCategoryInputSchema } from './DishUncheckedCreateWithoutCategoryInputSchema';

export const DishUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DishUpdateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => DishCreateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default DishUpsertWithWhereUniqueWithoutCategoryInputSchema;
