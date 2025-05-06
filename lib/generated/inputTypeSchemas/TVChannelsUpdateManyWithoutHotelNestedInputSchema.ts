import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsCreateWithoutHotelInputSchema } from './TVChannelsCreateWithoutHotelInputSchema';
import { TVChannelsUncheckedCreateWithoutHotelInputSchema } from './TVChannelsUncheckedCreateWithoutHotelInputSchema';
import { TVChannelsCreateOrConnectWithoutHotelInputSchema } from './TVChannelsCreateOrConnectWithoutHotelInputSchema';
import { TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema } from './TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema';
import { TVChannelsCreateManyHotelInputEnvelopeSchema } from './TVChannelsCreateManyHotelInputEnvelopeSchema';
import { TVChannelsWhereUniqueInputSchema } from './TVChannelsWhereUniqueInputSchema';
import { TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema } from './TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema';
import { TVChannelsUpdateManyWithWhereWithoutHotelInputSchema } from './TVChannelsUpdateManyWithWhereWithoutHotelInputSchema';
import { TVChannelsScalarWhereInputSchema } from './TVChannelsScalarWhereInputSchema';

export const TVChannelsUpdateManyWithoutHotelNestedInputSchema: z.ZodType<Prisma.TVChannelsUpdateManyWithoutHotelNestedInput> = z.object({
  create: z.union([ z.lazy(() => TVChannelsCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsCreateWithoutHotelInputSchema).array(),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema),z.lazy(() => TVChannelsUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TVChannelsCreateOrConnectWithoutHotelInputSchema),z.lazy(() => TVChannelsCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => TVChannelsUpsertWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TVChannelsCreateManyHotelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TVChannelsWhereUniqueInputSchema),z.lazy(() => TVChannelsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TVChannelsWhereUniqueInputSchema),z.lazy(() => TVChannelsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TVChannelsWhereUniqueInputSchema),z.lazy(() => TVChannelsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TVChannelsWhereUniqueInputSchema),z.lazy(() => TVChannelsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => TVChannelsUpdateWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TVChannelsUpdateManyWithWhereWithoutHotelInputSchema),z.lazy(() => TVChannelsUpdateManyWithWhereWithoutHotelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TVChannelsScalarWhereInputSchema),z.lazy(() => TVChannelsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TVChannelsUpdateManyWithoutHotelNestedInputSchema;
