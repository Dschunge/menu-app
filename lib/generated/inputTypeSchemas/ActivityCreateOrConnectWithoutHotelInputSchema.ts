import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityWhereUniqueInputSchema } from './ActivityWhereUniqueInputSchema';
import { ActivityCreateWithoutHotelInputSchema } from './ActivityCreateWithoutHotelInputSchema';
import { ActivityUncheckedCreateWithoutHotelInputSchema } from './ActivityUncheckedCreateWithoutHotelInputSchema';

export const ActivityCreateOrConnectWithoutHotelInputSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutHotelInput> = z.object({
  where: z.lazy(() => ActivityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ActivityCreateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default ActivityCreateOrConnectWithoutHotelInputSchema;
