import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsCreateWithoutHotelInputSchema } from './TVChannelsCreateWithoutHotelInputSchema';
import { TVChannelsUncheckedCreateWithoutHotelInputSchema } from './TVChannelsUncheckedCreateWithoutHotelInputSchema';
import { TVChannelsCreateOrConnectWithoutHotelInputSchema } from './TVChannelsCreateOrConnectWithoutHotelInputSchema';
import { TVChannelsCreateManyHotelInputEnvelopeSchema } from './TVChannelsCreateManyHotelInputEnvelopeSchema';
import { TVChannelsWhereUniqueInputSchema } from './TVChannelsWhereUniqueInputSchema';

export const TVChannelsUncheckedCreateNestedManyWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsUncheckedCreateNestedManyWithoutHotelInput> = z.object({
  create: z.union([ z.lazy(() => TVChannelsCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsCreateWithoutHotelInputSchema).array(),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TVChannelsCreateOrConnectWithoutHotelInputSchema),z.lazy(() => TVChannelsCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TVChannelsCreateManyHotelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TVChannelsWhereUniqueInputSchema),z.lazy(() => TVChannelsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TVChannelsUncheckedCreateNestedManyWithoutHotelInputSchema;
