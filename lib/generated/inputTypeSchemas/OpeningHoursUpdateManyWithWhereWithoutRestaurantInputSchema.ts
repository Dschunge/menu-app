import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { OpeningHoursScalarWhereInputSchema } from './OpeningHoursScalarWhereInputSchema';
import { OpeningHoursUpdateManyMutationInputSchema } from './OpeningHoursUpdateManyMutationInputSchema';
import { OpeningHoursUncheckedUpdateManyWithoutRestaurantInputSchema } from './OpeningHoursUncheckedUpdateManyWithoutRestaurantInputSchema';

export const OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.OpeningHoursUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => OpeningHoursScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OpeningHoursUpdateManyMutationInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default OpeningHoursUpdateManyWithWhereWithoutRestaurantInputSchema;
