import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableCreateWithoutRestaurantInputSchema } from './TableCreateWithoutRestaurantInputSchema';
import { TableUncheckedCreateWithoutRestaurantInputSchema } from './TableUncheckedCreateWithoutRestaurantInputSchema';
import { TableCreateOrConnectWithoutRestaurantInputSchema } from './TableCreateOrConnectWithoutRestaurantInputSchema';
import { TableCreateManyRestaurantInputEnvelopeSchema } from './TableCreateManyRestaurantInputEnvelopeSchema';
import { TableWhereUniqueInputSchema } from './TableWhereUniqueInputSchema';

export const TableCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.TableCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => TableCreateWithoutRestaurantInputSchema),z.lazy(() => TableCreateWithoutRestaurantInputSchema).array(),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => TableUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TableCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => TableCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TableCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TableWhereUniqueInputSchema),z.lazy(() => TableWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TableCreateNestedManyWithoutRestaurantInputSchema;
