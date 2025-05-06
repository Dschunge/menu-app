import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithoutMenuInputSchema } from './DishUpdateWithoutMenuInputSchema';
import { DishUncheckedUpdateWithoutMenuInputSchema } from './DishUncheckedUpdateWithoutMenuInputSchema';
import { DishCreateWithoutMenuInputSchema } from './DishCreateWithoutMenuInputSchema';
import { DishUncheckedCreateWithoutMenuInputSchema } from './DishUncheckedCreateWithoutMenuInputSchema';

export const DishUpsertWithWhereUniqueWithoutMenuInputSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutMenuInput> = z.object({
  where: z.lazy(() => DishWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DishUpdateWithoutMenuInputSchema),z.lazy(() => DishUncheckedUpdateWithoutMenuInputSchema) ]),
  create: z.union([ z.lazy(() => DishCreateWithoutMenuInputSchema),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema) ]),
}).strict();

export default DishUpsertWithWhereUniqueWithoutMenuInputSchema;
