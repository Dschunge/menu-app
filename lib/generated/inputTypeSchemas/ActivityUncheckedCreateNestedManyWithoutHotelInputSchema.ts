import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ActivityCreateWithoutHotelInputSchema } from './ActivityCreateWithoutHotelInputSchema';
import { ActivityUncheckedCreateWithoutHotelInputSchema } from './ActivityUncheckedCreateWithoutHotelInputSchema';
import { ActivityCreateOrConnectWithoutHotelInputSchema } from './ActivityCreateOrConnectWithoutHotelInputSchema';
import { ActivityCreateManyHotelInputEnvelopeSchema } from './ActivityCreateManyHotelInputEnvelopeSchema';
import { ActivityWhereUniqueInputSchema } from './ActivityWhereUniqueInputSchema';

export const ActivityUncheckedCreateNestedManyWithoutHotelInputSchema: z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutHotelInput> = z.object({
  create: z.union([ z.lazy(() => ActivityCreateWithoutHotelInputSchema),z.lazy(() => ActivityCreateWithoutHotelInputSchema).array(),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema),z.lazy(() => ActivityUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ActivityCreateOrConnectWithoutHotelInputSchema),z.lazy(() => ActivityCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ActivityCreateManyHotelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ActivityWhereUniqueInputSchema),z.lazy(() => ActivityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ActivityUncheckedCreateNestedManyWithoutHotelInputSchema;
