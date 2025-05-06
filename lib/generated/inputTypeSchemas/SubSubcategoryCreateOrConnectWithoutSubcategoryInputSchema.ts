import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryCreateWithoutSubcategoryInputSchema } from './SubSubcategoryCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema';

export const SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryCreateOrConnectWithoutSubcategoryInput> = z.object({
  where: z.lazy(() => SubSubcategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema) ]),
}).strict();

export default SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema;
