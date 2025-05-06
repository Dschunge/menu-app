import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursWhereUniqueInputSchema } from './OpeningHoursWhereUniqueInputSchema';
import { OpeningHoursUpdateWithoutRestaurantInputSchema } from './OpeningHoursUpdateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema';
import { OpeningHoursCreateWithoutRestaurantInputSchema } from './OpeningHoursCreateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedCreateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedCreateWithoutRestaurantInputSchema';

export const OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OpeningHoursUpdateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default OpeningHoursUpsertWithWhereUniqueWithoutRestaurantInputSchema;
