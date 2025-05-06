import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryUpdateWithoutSubcategoryInputSchema } from './SubSubcategoryUpdateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema';
import { SubSubcategoryCreateWithoutSubcategoryInputSchema } from './SubSubcategoryCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema';

export const SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => SubSubcategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubSubcategoryUpdateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema) ]),
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema) ]),
}).strict();

export default SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema;
