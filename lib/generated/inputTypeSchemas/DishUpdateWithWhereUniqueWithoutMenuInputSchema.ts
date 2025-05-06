import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutMenuInputSchema } from './DishUpdateWithoutMenuInputSchema';
import { DishUncheckedUpdateWithoutMenuInputSchema } from './DishUncheckedUpdateWithoutMenuInputSchema';

export const DishUpdateWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutMenuInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DishUpdateWithoutMenuInputSchema),z.lazy(() => DishUncheckedUpdateWithoutMenuInputSchema) ]),
}).strict();

export default DishUpdateWithWhereUniqueWithoutMenuInputSchema;
