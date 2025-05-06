import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityScalarWhereInputSchema } from './ActivityScalarWhereInputSchema';
import { ActivityUpdateManyMutationInputSchema } from './ActivityUpdateManyMutationInputSchema';
import { ActivityUncheckedUpdateManyWithoutHotelInputSchema } from './ActivityUncheckedUpdateManyWithoutHotelInputSchema';

export const ActivityUpdateManyWithWhereWithoutHotelInputSchema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutHotelInput> = z.object({
  where: z.lazy(() => ActivityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ActivityUpdateManyMutationInputSchema),z.lazy(() => ActivityUncheckedUpdateManyWithoutHotelInputSchema) ]),
}).strict();

export default ActivityUpdateManyWithWhereWithoutHotelInputSchema;
