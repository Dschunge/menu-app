import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutMenuInputSchema } from './DishCreateWithoutMenuInputSchema';
import { DishUncheckedCreateWithoutMenuInputSchema } from './DishUncheckedCreateWithoutMenuInputSchema';
import { DishCreateOrConnectWithoutMenuInputSchema } from './DishCreateOrConnectWithoutMenuInputSchema';
import { DishCreateManyMenuInputEnvelopeSchema } from './DishCreateManyMenuInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';

export const DishCreateNestedManyWithoutMenuInputSchema: z.ZodType<Prisma.DishCreateNestedManyWithoutMenuInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutMenuInputSchema),z.lazy(() => DishCreateWithoutMenuInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutMenuInputSchema),z.lazy(() => DishCreateOrConnectWithoutMenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyMenuInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DishCreateNestedManyWithoutMenuInputSchema;
