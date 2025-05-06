import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryScalarWhereInputSchema } from './SubSubcategoryScalarWhereInputSchema';
import { SubSubcategoryUpdateManyMutationInputSchema } from './SubSubcategoryUpdateManyMutationInputSchema';
import { SubSubcategoryUncheckedUpdateManyWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedUpdateManyWithoutSubcategoryInputSchema';

export const SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => SubSubcategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubSubcategoryUpdateManyMutationInputSchema),z.lazy(() => SubSubcategoryUncheckedUpdateManyWithoutSubcategoryInputSchema) ]),
}).strict();

export default SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema;
