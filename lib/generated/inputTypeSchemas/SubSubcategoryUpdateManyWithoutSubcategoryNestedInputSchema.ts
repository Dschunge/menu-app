import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubSubcategoryCreateWithoutSubcategoryInputSchema } from './SubSubcategoryCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema } from './SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema';
import { SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema } from './SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema';
import { SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema } from './SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema';
import { SubSubcategoryCreateManySubcategoryInputEnvelopeSchema } from './SubSubcategoryCreateManySubcategoryInputEnvelopeSchema';
import { SubSubcategoryWhereUniqueInputSchema } from './SubSubcategoryWhereUniqueInputSchema';
import { SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema } from './SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema';
import { SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema } from './SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema';
import { SubSubcategoryScalarWhereInputSchema } from './SubSubcategoryScalarWhereInputSchema';

export const SubSubcategoryUpdateManyWithoutSubcategoryNestedInputSchema: z.ZodType<Prisma.SubSubcategoryUpdateManyWithoutSubcategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryCreateWithoutSubcategoryInputSchema).array(),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUncheckedCreateWithoutSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryCreateOrConnectWithoutSubcategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUpsertWithWhereUniqueWithoutSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubSubcategoryCreateManySubcategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubSubcategoryWhereUniqueInputSchema),z.lazy(() => SubSubcategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubSubcategoryWhereUniqueInputSchema),z.lazy(() => SubSubcategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubSubcategoryWhereUniqueInputSchema),z.lazy(() => SubSubcategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubSubcategoryWhereUniqueInputSchema),z.lazy(() => SubSubcategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUpdateWithWhereUniqueWithoutSubcategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema),z.lazy(() => SubSubcategoryUpdateManyWithWhereWithoutSubcategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubSubcategoryScalarWhereInputSchema),z.lazy(() => SubSubcategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubSubcategoryUpdateManyWithoutSubcategoryNestedInputSchema;
