import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutRestaurantInputSchema } from './DishUpdateWithoutRestaurantInputSchema';
import { DishUncheckedUpdateWithoutRestaurantInputSchema } from './DishUncheckedUpdateWithoutRestaurantInputSchema';

export const DishUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DishUpdateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default DishUpdateWithWhereUniqueWithoutRestaurantInputSchema;
