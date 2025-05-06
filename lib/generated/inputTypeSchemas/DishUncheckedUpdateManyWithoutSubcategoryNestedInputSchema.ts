import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutSubcategoryInputSchema } from './DishCreateWithoutSubcategoryInputSchema';
import { DishUncheckedCreateWithoutSubcategoryInputSchema } from './DishUncheckedCreateWithoutSubcategoryInputSchema';
import { DishCreateOrConnectWithoutSubcategoryInputSchema } from './DishCreateOrConnectWithoutSubcategoryInputSchema';
import { DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema } from './DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema';
import { DishCreateManySubcategoryInputEnvelopeSchema } from './DishCreateManySubcategoryInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema } from './DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema';
import { DishUpdateManyWithWhereWithoutSubcategoryInputSchema } from './DishUpdateManyWithWhereWithoutSubcategoryInputSchema';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';

export const DishUncheckedUpdateManyWithoutSubcategoryNestedInputSchema: z.ZodType<Prisma.DishUncheckedUpdateManyWithoutSubcategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutSubcategoryInputSchema),z.lazy(() => DishCreateWithoutSubcategoryInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema),z.lazy(() => DishUncheckedCreateWithoutSubcategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutSubcategoryInputSchema),z.lazy(() => DishCreateOrConnectWithoutSubcategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema),z.lazy(() => DishUpsertWithWhereUniqueWithoutSubcategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManySubcategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema),z.lazy(() => DishUpdateWithWhereUniqueWithoutSubcategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DishUpdateManyWithWhereWithoutSubcategoryInputSchema),z.lazy(() => DishUpdateManyWithWhereWithoutSubcategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DishUncheckedUpdateManyWithoutSubcategoryNestedInputSchema;
