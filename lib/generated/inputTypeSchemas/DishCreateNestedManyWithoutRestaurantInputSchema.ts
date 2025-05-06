import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutRestaurantInputSchema } from './DishCreateWithoutRestaurantInputSchema';
import { DishUncheckedCreateWithoutRestaurantInputSchema } from './DishUncheckedCreateWithoutRestaurantInputSchema';
import { DishCreateOrConnectWithoutRestaurantInputSchema } from './DishCreateOrConnectWithoutRestaurantInputSchema';
import { DishCreateManyRestaurantInputEnvelopeSchema } from './DishCreateManyRestaurantInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';

export const DishCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.DishCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutRestaurantInputSchema),z.lazy(() => DishCreateWithoutRestaurantInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => DishCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DishCreateNestedManyWithoutRestaurantInputSchema;
