import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelCreateWithoutActivitiesInputSchema } from './HotelCreateWithoutActivitiesInputSchema';
import { HotelUncheckedCreateWithoutActivitiesInputSchema } from './HotelUncheckedCreateWithoutActivitiesInputSchema';

export const HotelCreateOrConnectWithoutActivitiesInputSchema: z.ZodType<Prisma.HotelCreateOrConnectWithoutActivitiesInput> = z.object({
  where: z.lazy(() => HotelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HotelCreateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutActivitiesInputSchema) ]),
}).strict();

export default HotelCreateOrConnectWithoutActivitiesInputSchema;
