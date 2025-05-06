import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutCategoryInputSchema } from './SubcategoryCreateWithoutCategoryInputSchema';
import { SubcategoryUncheckedCreateWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateWithoutCategoryInputSchema';
import { SubcategoryCreateOrConnectWithoutCategoryInputSchema } from './SubcategoryCreateOrConnectWithoutCategoryInputSchema';
import { SubcategoryCreateManyCategoryInputEnvelopeSchema } from './SubcategoryCreateManyCategoryInputEnvelopeSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';

export const SubcategoryCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.SubcategoryCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema).array(),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubcategoryCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => SubcategoryCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubcategoryCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubcategoryWhereUniqueInputSchema),z.lazy(() => SubcategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubcategoryCreateNestedManyWithoutCategoryInputSchema;
