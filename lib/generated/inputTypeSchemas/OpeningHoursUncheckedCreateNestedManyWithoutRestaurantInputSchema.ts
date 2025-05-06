import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursCreateWithoutRestaurantInputSchema } from './OpeningHoursCreateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedCreateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedCreateWithoutRestaurantInputSchema';
import { OpeningHoursCreateOrConnectWithoutRestaurantInputSchema } from './OpeningHoursCreateOrConnectWithoutRestaurantInputSchema';
import { OpeningHoursCreateManyRestaurantInputEnvelopeSchema } from './OpeningHoursCreateManyRestaurantInputEnvelopeSchema';
import { OpeningHoursWhereUniqueInputSchema } from './OpeningHoursWhereUniqueInputSchema';

export const OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OpeningHoursUncheckedCreateNestedManyWithoutRestaurantInputSchema;
