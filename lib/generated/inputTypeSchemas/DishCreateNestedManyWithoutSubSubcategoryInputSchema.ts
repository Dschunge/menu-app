import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutSubSubcategoryInputSchema } from './DishCreateWithoutSubSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubSubcategoryInputSchema';
import { DishCreateOrConnectWithoutSubSubcategoryInputSchema } from './DishCreateOrConnectWithoutSubSubcategoryInputSchema';
import { DishCreateManySubSubcategoryInputEnvelopeSchema } from './DishCreateManySubSubcategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';

export const DishCreateNestedManyWithoutSubSubcategoryInputSchema: z.ZodType<Prisma.DishCreateNestedManyWithoutSubSubcategoryInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutSubSubcategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutSubSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManySubSubcategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DishCreateNestedManyWithoutSubSubcategoryInputSchema;
