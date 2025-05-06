import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsWhereUniqueInputSchema } from './TVChannelsWhereUniqueInputSchema';
import { TVChannelsCreateWithoutHotelInputSchema } from './TVChannelsCreateWithoutHotelInputSchema';
import { TVChannelsUncheckedCreateWithoutHotelInputSchema } from './TVChannelsUncheckedCreateWithoutHotelInputSchema';

export const TVChannelsCreateOrConnectWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsCreateOrConnectWithoutHotelInput> = z.object({
  where: z.lazy(() => TVChannelsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TVChannelsCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default TVChannelsCreateOrConnectWithoutHotelInputSchema;
