import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutCategoryInputSchema } from './DishCreateWithoutCategoryInputSchema';
import { DishUncheckedCreateWithoutCategoryInputSchema } from './DishUncheckedCreateWithoutCategoryInputSchema';
import { DishCreateOrConnectWithoutCategoryInputSchema } from './DishCreateOrConnectWithoutCategoryInputSchema';
import { DishCreateManyCategoryInputEnvelopeSchema } from './DishCreateManyCategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';

export const DishCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.DishCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutCategoryInputSchema),z.lazy(() => DishCreateWithoutCategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DishCreateNestedManyWithoutCategoryInputSchema;
