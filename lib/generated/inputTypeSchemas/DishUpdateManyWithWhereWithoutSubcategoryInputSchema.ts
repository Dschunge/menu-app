import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';
import { DishUpdateManyMutationInputSchema } from './DishUpdateManyMutationInputSchema';
import { DishUncheckedUpdateManyWithoutSubcategoryInputSchema } from './DishUncheckedUpdateManyWithoutSubcategoryInputSchema';

export const DishUpdateManyWithWhereWithoutSubcategoryInputSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => DishScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DishUpdateManyMutationInputSchema),z.lazy(() => DishUncheckedUpdateManyWithoutSubcategoryInputSchema) ]),
}).strict();

export default DishUpdateManyWithWhereWithoutSubcategoryInputSchema;
