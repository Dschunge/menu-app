import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema';
import { SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema } from './SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema';
import { SubcategoryUpsertWithoutSubSubcategoriesInputSchema } from './SubcategoryUpsertWithoutSubSubcategoriesInputSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInputSchema } from './SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInputSchema';
import { SubcategoryUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUpdateWithoutSubSubcategoriesInputSchema';
import { SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema } from './SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema';

export const SubcategoryUpdateOneRequiredWithoutSubSubcategoriesNestedInputSchema: z.ZodType<Prisma.SubcategoryUpdateOneRequiredWithoutSubSubcategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutSubSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubcategoryCreateOrConnectWithoutSubSubcategoriesInputSchema).optional(),
  upsert: z.lazy(() => SubcategoryUpsertWithoutSubSubcategoriesInputSchema).optional(),
  connect: z.lazy(() => SubcategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SubcategoryUpdateToOneWithWhereWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUpdateWithoutSubSubcategoriesInputSchema),z.lazy(() => SubcategoryUncheckedUpdateWithoutSubSubcategoriesInputSchema) ]).optional(),
}).strict();

export default SubcategoryUpdateOneRequiredWithoutSubSubcategoriesNestedInputSchema;
