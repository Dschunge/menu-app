import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityWhereUniqueInputSchema } from './ActivityWhereUniqueInputSchema';
import { ActivityUpdateWithoutHotelInputSchema } from './ActivityUpdateWithoutHotelInputSchema';
import { ActivityUncheckedUpdateWithoutHotelInputSchema } from './ActivityUncheckedUpdateWithoutHotelInputSchema';
import { ActivityCreateWithoutHotelInputSchema } from './ActivityCreateWithoutHotelInputSchema';
import { ActivityUncheckedCreateWithoutHotelInputSchema } from './ActivityUncheckedCreateWithoutHotelInputSchema';

export const ActivityUpsertWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => ActivityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ActivityUpdateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedUpdateWithoutHotelInputSchema) ]),
  create: z.union([ z.lazy(() => ActivityCreateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default ActivityUpsertWithWhereUniqueWithoutHotelInputSchema;
