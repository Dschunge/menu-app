import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryUpdateWithoutSubcategoryInputSchema } from './SubSubcategoryUpdateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema';

export const SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => SubSubcategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubSubcategoryUpdateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateWithoutSubcategoryInputSchema) ]),
}).strict();

export default SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema;
