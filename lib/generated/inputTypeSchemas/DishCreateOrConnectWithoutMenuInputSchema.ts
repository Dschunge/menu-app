import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishCreateWithoutMenuInputSchema } from './DishCreateWithoutMenuInputSchema';
import { DishUncheckedCreateWithoutMenuInputSchema } from './DishUncheckedCreateWithoutMenuInputSchema';

export const DishCreateOrConnectWithoutMenuInputSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutMenuInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DishCreateWithoutMenuInputSchema),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema) ]),
}).strict();

export default DishCreateOrConnectWithoutMenuInputSchema;
