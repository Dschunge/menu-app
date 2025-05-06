import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutSubSubcategoryInputSchema } from './DishUpdateWithoutSubSubcategoryInputSchema';
import { DishUncheckedUpdateWithoutSubSubcategoryInputSchema } from './DishUncheckedUpdateWithoutSubSubcategoryInputSchema';
import { DishCreateWithoutSubSubcategoryInputSchema } from './DishCreateWithoutSubSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubSubcategoryInputSchema';

export const DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutSubSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DishUpdateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutSubSubcategoryInputSchema) ]),
  create: z.union([ z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema) ]),
}).strict();

export default DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema;
