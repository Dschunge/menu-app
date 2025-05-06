import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateWithoutMenuInputSchema } from './DishCreateWithoutMenuInputSchema';
import { DishUncheckedCreateWithoutMenuInputSchema } from './DishUncheckedCreateWithoutMenuInputSchema';
import { DishCreateOrConnectWithoutMenuInputSchema } from './DishCreateOrConnectWithoutMenuInputSchema';
import { DishUpsertWithWhereUniqueWithoutMenuInputSchema } from './DishUpsertWithWhereUniqueWithoutMenuInputSchema';
import { DishCreateManyMenuInputEnvelopeSchema } from './DishCreateManyMenuInputEnvelopeSchema';
import { DishWhereUniqueInputSchema } from './DishWhereUniqueInputSchema';
import { DishUpdateWithWhereUniqueWithoutMenuInputSchema } from './DishUpdateWithWhereUniqueWithoutMenuInputSchema';
import { DishUpdateManyWithWhereWithoutMenuInputSchema } from './DishUpdateManyWithWhereWithoutMenuInputSchema';
import { DishScalarWhereInputSchema } from './DishScalarWhereInputSchema';

export const DishUpdateManyWithoutMenuNestedInputSchema: z.ZodType<Prisma.DishUpdateManyWithoutMenuNestedInput> = z.object({
  create: z.union([ z.lazy(() => DishCreateWithoutMenuInputSchema),z.lazy(() => DishCreateWithoutMenuInputSchema).array(),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema),z.lazy(() => DishUncheckedCreateWithoutMenuInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DishCreateOrConnectWithoutMenuInputSchema),z.lazy(() => DishCreateOrConnectWithoutMenuInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DishUpsertWithWhereUniqueWithoutMenuInputSchema),z.lazy(() => DishUpsertWithWhereUniqueWithoutMenuInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DishCreateManyMenuInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DishWhereUniqueInputSchema),z.lazy(() => DishWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DishUpdateWithWhereUniqueWithoutMenuInputSchema),z.lazy(() => DishUpdateWithWhereUniqueWithoutMenuInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DishUpdateManyWithWhereWithoutMenuInputSchema),z.lazy(() => DishUpdateManyWithWhereWithoutMenuInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DishScalarWhereInputSchema),z.lazy(() => DishScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DishUpdateManyWithoutMenuNestedInputSchema;
