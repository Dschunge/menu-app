import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutSubcategoryInputSchema } from './DishUpdateWithoutSubcategoryInputSchema';
import { DishUncheckedUpdateWithoutSubcategoryInputSchema } from './DishUncheckedUpdateWithoutSubcategoryInputSchema';
import { DishCreateWithoutSubcategoryInputSchema } from './DishCreateWithoutSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubcategoryInputSchema';

export const DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DishUpdateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutSubcategoryInputSchema) ]),
  create: z.union([ z.lazy(() => DishCreateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema) ]),
}).strict();

export default DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema;
