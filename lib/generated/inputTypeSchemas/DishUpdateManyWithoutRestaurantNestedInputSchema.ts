import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutRestaurantInputSchema } from './DishCreateWithoutRestaurantInputSchema';
import { DishUncheckedCreateWithoutRestaurantInputSchema } from './DishUncheckedCreateWithoutRestaurantInputSchema';
import { DishCreateOrConnectWithoutRestaurantInputSchema } from './DishCreateOrConnectWithoutRestaurantInputSchema';
import { DishUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './DishUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { DishCreateManyRestaurantInputEnvelopeSchema } from './DishCreateManyRestaurantInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './DishUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { DishUpdateManyWithWhereWithoutRestaurantInputSchema } from './DishUpdateManyWithWhereWithoutRestaurantInputSchema';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';

export const DishUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.DishUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutRestaurantInputSchema),z.lazy(() => DishCreateWithoutRestaurantInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => DishUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => DishCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DishUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => DishUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DishUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => DishUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DishUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => DishUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DishUpdateManyWithoutRestaurantNestedInputSchema;
