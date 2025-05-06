import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursWhereUniqueInputSchema } from './OpeningHoursWhereUniqueInputSchema';
import { OpeningHoursUpdateWithoutRestaurantInputSchema } from './OpeningHoursUpdateWithoutRestaurantInputSchema';
import { OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema } from './OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema';

export const OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OpeningHoursUpdateWithoutRestaurantInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default OpeningHoursUpdateWithWhereUniqueWithoutRestaurantInputSchema;
