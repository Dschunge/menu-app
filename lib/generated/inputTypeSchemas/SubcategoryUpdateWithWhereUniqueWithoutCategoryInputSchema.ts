import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryUpdateWithoutCategoryInputSchema } from './SubcategoryUpdateWithoutCategoryInputSchema';
import { SubcategoryUncheckedUpdateWithoutCategoryInputSchema } from './SubcategoryUncheckedUpdateWithoutCategoryInputSchema';

export const SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.SubcategoryUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => SubcategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubcategoryUpdateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema;
