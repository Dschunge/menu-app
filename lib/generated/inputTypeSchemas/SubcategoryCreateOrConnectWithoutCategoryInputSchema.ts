import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryCreateWithoutCategoryInputSchema } from './SubcategoryCreateWithoutCategoryInputSchema';
import { SubcategoryUncheckedCreateWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateWithoutCategoryInputSchema';

export const SubcategoryCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.SubcategoryCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => SubcategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default SubcategoryCreateOrConnectWithoutCategoryInputSchema;
