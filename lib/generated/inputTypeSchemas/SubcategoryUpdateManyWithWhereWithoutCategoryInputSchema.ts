import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryScalarWhereInputSchema } from './SubcategoryScalarWhereInputSchema';
import { SubcategoryUpdateManyMutationInputSchema } from './SubcategoryUpdateManyMutationInputSchema';
import { SubcategoryUncheckedUpdateManyWithoutCategoryInputSchema } from './SubcategoryUncheckedUpdateManyWithoutCategoryInputSchema';

export const SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.SubcategoryUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => SubcategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubcategoryUpdateManyMutationInputSchema),z.lazy(() => SubcategoryUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema;
