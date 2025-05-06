import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableCreateWithoutRestaurantInputSchema } from './TableCreateWithoutRestaurantInputSchema';
import { TableUncheckedCreateWithoutRestaurantInputSchema } from './TableUncheckedCreateWithoutRestaurantInputSchema';
import { TableCreateOrConnectWithoutRestaurantInputSchema } from './TableCreateOrConnectWithoutRestaurantInputSchema';
import { TableUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './TableUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { TableCreateManyRestaurantInputEnvelopeSchema } from './TableCreateManyRestaurantInputEnvelopeSchema';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';
import { TableUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './TableUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { TableUpdateManyWithWhereWithoutRestaurantInputSchema } from './TableUpdateManyWithWhereWithoutRestaurantInputSchema';
import { TableScalarWhereInputSchema } from './TableScalarWhereInputSchema';

export const TableUncheckedUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.TableUncheckedUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => TableCreateWithoutRestaurantInputSchema),z.lazy(() => TableCreateWithoutRestaurantInputSchema).array(),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TableCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => TableCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TableUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => TableUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TableCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TableWhereUniqueInputSchema),z.lazy(() => TableWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TableWhereUniqueInputSchema),z.lazy(() => TableWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TableWhereUniqueInputSchema),z.lazy(() => TableWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TableWhereUniqueInputSchema),z.lazy(() => TableWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TableUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => TableUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TableUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => TableUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TableScalarWhereInputSchema),z.lazy(() => TableScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TableUncheckedUpdateManyWithoutRestaurantNestedInputSchema;
