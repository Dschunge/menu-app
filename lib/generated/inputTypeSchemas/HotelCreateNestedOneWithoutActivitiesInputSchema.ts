import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutActivitiesInputSchema } from './HotelCreateWithoutActivitiesInputSchema';
import { HotelUncheckedCreateWithoutActivitiesInputSchema } from './HotelUncheckedCreateWithoutActivitiesInputSchema';
import { HotelCreateOrConnectWithoutActivitiesInputSchema } from './HotelCreateOrConnectWithoutActivitiesInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';

export const HotelCreateNestedOneWithoutActivitiesInputSchema: z.ZodType<Prisma.HotelCreateNestedOneWithoutActivitiesInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutActivitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutActivitiesInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional()
}).strict();

export default HotelCreateNestedOneWithoutActivitiesInputSchema;
