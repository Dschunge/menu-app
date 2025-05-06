import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';
import { DishUpdateManyMutationInputSchema } from './DishUpdateManyMutationInputSchema';
import { DishUncheckedUpdateManyWithoutCategoryInputSchema } from './DishUncheckedUpdateManyWithoutCategoryInputSchema';

export const DishUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => DishScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DishUpdateManyMutationInputSchema),z.lazy(() => DishUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default DishUpdateManyWithWhereWithoutCategoryInputSchema;
