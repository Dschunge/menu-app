import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutSubcategoryInputSchema } from './DishCreateWithoutSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubcategoryInputSchema';
import { DishCreateOrConnectWithoutSubcategoryInputSchema } from './DishCreateOrConnectWithoutSubcategoryInputSchema';
import { DishCreateManySubcategoryInputEnvelopeSchema } from './DishCreateManySubcategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';

export const DishCreateNestedManyWithoutSubcategoryInputSchema: z.ZodType<Prisma.DishCreateNestedManyWithoutSubcategoryInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutSubcategoryInputSchema),z.lazy(() => DishCreateWithoutSubcategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutSubcategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManySubcategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DishCreateNestedManyWithoutSubcategoryInputSchema;
