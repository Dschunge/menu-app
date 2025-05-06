import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';
import { DishUpdateManyMutationInputSchema } from './DishUpdateManyMutationInputSchema';
import { DishUncheckedUpdateManyWithoutSubSubcategoryInputSchema } from './DishUncheckedUpdateManyWithoutSubSubcategoryInputSchema';

export const DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutSubSubcategoryInput> = z.object({
  where: z.lazy(() => DishScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DishUpdateManyMutationInputSchema),z.lazy(() => DishUncheckedUpdateManyWithoutSubSubcategoryInputSchema) ]),
}).strict();

export default DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema;
