import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishCreateWithoutSubcategoryInputSchema } from './DishCreateWithoutSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubcategoryInputSchema';

export const DishCreateOrConnectWithoutSubcategoryInputSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DishCreateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema) ]),
}).strict();

export default DishCreateOrConnectWithoutSubcategoryInputSchema;
