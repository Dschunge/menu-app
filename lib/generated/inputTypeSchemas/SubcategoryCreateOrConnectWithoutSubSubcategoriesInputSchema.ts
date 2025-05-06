import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema';

export const SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryCreateOrConnectWithoutSubSubcategoriesInput> = z.object({
  where: z.lazy(() => SubcategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema) ]),
}).strict();

export default SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema;
