import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';

export const SubcategoryCreateNestedOneWithoutSubSubcategoriesInputSchema: z.ZodType<Prisma.SubcategoryCreateNestedOneWithoutSubSubcategoriesInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema).optional(),
  connect: z.lazy(() => SubcategoryWhereUniqueInputSchema).optional()
}).strict();

export default SubcategoryCreateNestedOneWithoutSubSubcategoriesInputSchema;
