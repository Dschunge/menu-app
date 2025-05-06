import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryUpdateWithoutCategoryInputSchema } from './SubcategoryUpdateWithoutCategoryInputSchema';
import { SubcategoryUncheckedUpdateWithoutCategoryInputSchema } from './SubcategoryUncheckedUpdateWithoutCategoryInputSchema';
import { SubcategoryCreateWithoutCategoryInputSchema } from './SubcategoryCreateWithoutCategoryInputSchema';
import { SubcategoryUncheckedCreateWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateWithoutCategoryInputSchema';

export const SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.SubcategoryUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => SubcategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubcategoryUpdateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema;
