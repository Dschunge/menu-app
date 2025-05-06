import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishCreateWithoutRestaurantInputSchema } from './DishCreateWithoutRestaurantInputSchema';
import { DishUncheckedCreateWithoutRestaurantInputSchema } from './DishUncheckedCreateWithoutRestaurantInputSchema';

export const DishCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DishCreateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default DishCreateOrConnectWithoutRestaurantInputSchema;
