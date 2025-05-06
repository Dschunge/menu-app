import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutSubSubcategoryInputSchema } from './DishUpdateWithoutSubSubcategoryInputSchema';
import { DishUncheckedUpdateWithoutSubSubcategoryInputSchema } from './DishUncheckedUpdateWithoutSubSubcategoryInputSchema';

export const DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutSubSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DishUpdateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedUpdateWithoutSubSubcategoryInputSchema) ]),
}).strict();

export default DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema;
