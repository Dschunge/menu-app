import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutSubSubcategoryInputSchema } from './DishCreateWithoutSubSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubSubcategoryInputSchema';
import { DishCreateOrConnectWithoutSubSubcategoryInputSchema } from './DishCreateOrConnectWithoutSubSubcategoryInputSchema';
import { DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema } from './DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema';
import { DishCreateManySubSubcategoryInputEnvelopeSchema } from './DishCreateManySubSubcategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema } from './DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema';
import { DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema } from './DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';

export const DishUncheckedUpdateManyWithoutSubSubcategoryNestedInputSchema: z.ZodType<Prisma.DishUncheckedUpdateManyWithoutSubSubcategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishCreateWithoutSubSubcategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutSubSubcategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutSubSubcategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema),z.lazy(() => DishUpsertWithWhereUniqueWithoutSubSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManySubSubcategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema),z.lazy(() => DishUpdateWithWhereUniqueWithoutSubSubcategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema),z.lazy(() => DishUpdateManyWithWhereWithoutSubSubcategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DishUncheckedUpdateManyWithoutSubSubcategoryNestedInputSchema;
