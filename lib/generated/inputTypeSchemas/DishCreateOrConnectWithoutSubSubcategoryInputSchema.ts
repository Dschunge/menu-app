import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishCreateWithoutSubSubcategoryInputSchema } from './DishCreateWithoutSubSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubSubcategoryInputSchema';

export const DishCreateOrConnectWithoutSubSubcategoryInputSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutSubSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema) ]),
}).strict();

export default DishCreateOrConnectWithoutSubSubcategoryInputSchema;
