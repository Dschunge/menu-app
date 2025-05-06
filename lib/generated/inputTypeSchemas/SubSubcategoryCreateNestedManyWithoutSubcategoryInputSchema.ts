import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryCreateWithoutSubcategoryInputSchema } from './SubSubcategoryCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema } from './SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema';
import { SubSubcategoryCreateManySubcategoryInputEnvelopeSchema } from './SubSubcategoryCreateManySubcategoryInputEnvelopeSchema';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';

export const SubSubcategoryCreateNestedManyWithoutSubcategoryInputSchema: z.ZodType<Prisma.SubSubcategoryCreateNestedManyWithoutSubcategoryInput> = z.object({
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema).array(),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubSubcategoryCreateManySubcategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubSubcategoryWhereUniqueInputSchema),z.lazy(() => SubSubcategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubSubcategoryCreateNestedManyWithoutSubcategoryInputSchema;
