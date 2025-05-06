import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityWhereUniqueInputSchema } from './ActivityWhereUniqueInputSchema';
import { ActivityUpdateWithoutHotelInputSchema } from './ActivityUpdateWithoutHotelInputSchema';
import { ActivityUncheckedUpdateWithoutHotelInputSchema } from './ActivityUncheckedUpdateWithoutHotelInputSchema';

export const ActivityUpdateWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => ActivityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ActivityUpdateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedUpdateWithoutHotelInputSchema) ]),
}).strict();

export default ActivityUpdateWithWhereUniqueWithoutHotelInputSchema;
