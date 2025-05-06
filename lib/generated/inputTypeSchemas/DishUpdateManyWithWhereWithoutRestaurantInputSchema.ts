import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';
import { DishUpdateManyMutationInputSchema } from './DishUpdateManyMutationInputSchema';
import { DishUncheckedUpdateManyWithoutRestaurantInputSchema } from './DishUncheckedUpdateManyWithoutRestaurantInputSchema';

export const DishUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => DishScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DishUpdateManyMutationInputSchema),z.lazy(() => DishUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default DishUpdateManyWithWhereWithoutRestaurantInputSchema;
