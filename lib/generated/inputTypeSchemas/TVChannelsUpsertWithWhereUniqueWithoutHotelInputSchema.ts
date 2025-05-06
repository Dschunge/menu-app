import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsWhereUniqueInputSchema } from './TVChannelsWhereUniqueInputSchema';
import { TVChannelsUpdateWithoutHotelInputSchema } from './TVChannelsUpdateWithoutHotelInputSchema';
import { TVChannelsUncheckedUpdateWithoutHotelInputSchema } from './TVChannelsUncheckedUpdateWithoutHotelInputSchema';
import { TVChannelsCreateWithoutHotelInputSchema } from './TVChannelsCreateWithoutHotelInputSchema';
import { TVChannelsUncheckedCreateWithoutHotelInputSchema } from './TVChannelsUncheckedCreateWithoutHotelInputSchema';

export const TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsUpsertWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => TVChannelsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TVChannelsUpdateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedUpdateWithoutHotelInputSchema) ]),
  create: z.union([ z.lazy(() => TVChannelsCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema;
