import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsWhereUniqueInputSchema } from './TVChannelsWhereUniqueInputSchema';
import { TVChannelsUpdateWithoutHotelInputSchema } from './TVChannelsUpdateWithoutHotelInputSchema';
import { TVChannelsUncheckedUpdateWithoutHotelInputSchema } from './TVChannelsUncheckedUpdateWithoutHotelInputSchema';

export const TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsUpdateWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => TVChannelsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TVChannelsUpdateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedUpdateWithoutHotelInputSchema) ]),
}).strict();

export default TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema;
