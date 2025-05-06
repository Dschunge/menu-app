import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';
import { DishUpdateManyMutationInputSchema } from './DishUpdateManyMutationInputSchema';
import { DishUncheckedUpdateManyWithoutMenuInputSchema } from './DishUncheckedUpdateManyWithoutMenuInputSchema';

export const DishUpdateManyWithWhereWithoutMenuInputSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutMenuInput> = z.object({
  where: z.lazy(() => DishScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DishUpdateManyMutationInputSchema),z.lazy(() => DishUncheckedUpdateManyWithoutMenuInputSchema) ]),
}).strict();

export default DishUpdateManyWithWhereWithoutMenuInputSchema;
