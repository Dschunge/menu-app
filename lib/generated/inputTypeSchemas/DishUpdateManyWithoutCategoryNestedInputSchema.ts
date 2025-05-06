import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutCategoryInputSchema } from './DishCreateWithoutCategoryInputSchema';
import { DishUncheckedCreateWithoutCategoryInputSchema } from './DishUncheckedCreateWithoutCategoryInputSchema';
import { DishCreateOrConnectWithoutCategoryInputSchema } from './DishCreateOrConnectWithoutCategoryInputSchema';
import { DishUpsertWithWhereUniqueWithoutCategoryInputSchema } from './DishUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { DishCreateManyCategoryInputEnvelopeSchema } from './DishCreateManyCategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithWhereUniqueWithoutCategoryInputSchema } from './DishUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { DishUpdateManyWithWhereWithoutCategoryInputSchema } from './DishUpdateManyWithWhereWithoutCategoryInputSchema';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';

export const DishUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.DishUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutCategoryInputSchema),z.lazy(() => DishCreateWithoutCategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DishUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => DishUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DishUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => DishUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DishUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => DishUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DishUpdateManyWithoutCategoryNestedInputSchema;
