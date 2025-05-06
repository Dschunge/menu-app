import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursWhereUniqueInputSchema } from './OpeningHoursWhereUniqueInputSchema';
import { OpeningHoursCreateWithoutRestaurantInputSchema } from './OpeningHoursCreateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedCreateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedCreateWithoutRestaurantInputSchema';

export const OpeningHoursCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default OpeningHoursCreateOrConnectWithoutRestaurantInputSchema;
