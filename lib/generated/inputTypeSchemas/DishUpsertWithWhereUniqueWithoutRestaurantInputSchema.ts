import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutRestaurantInputSchema } from './DishUpdateWithoutRestaurantInputSchema';
import { DishUncheckedUpdateWithoutRestaurantInputSchema } from './DishUncheckedUpdateWithoutRestaurantInputSchema';
import { DishCreateWithoutRestaurantInputSchema } from './DishCreateWithoutRestaurantInputSchema';
import { DishUncheckedCreateWithoutRestaurantInputSchema } from './DishUncheckedCreateWithoutRestaurantInputSchema';

export const DishUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DishUpdateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => DishCreateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default DishUpsertWithWhereUniqueWithoutRestaurantInputSchema;
