import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutSubcategoryInputSchema } from './DishUpdateWithoutSubcategoryInputSchema';
import { DishUncheckedUpdateWithoutSubcategoryInputSchema } from './DishUncheckedUpdateWithoutSubcategoryInputSchema';

export const DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DishUpdateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutSubcategoryInputSchema) ]),
}).strict();

export default DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema;
