import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelCreateWithoutToursInputSchema } from './HotelCreateWithoutToursInputSchema';
import { HotelUncheckedCreateWithoutToursInputSchema } from './HotelUncheckedCreateWithoutToursInputSchema';

export const HotelCreateOrConnectWithoutToursInputSchema: z.ZodType<Prisma.HotelCreateOrConnectWithoutToursInput> = z.object({
  where: z.lazy(() => HotelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HotelCreateWithoutToursInputSchema),z.lazy(() => HotelUncheckedCreateWithoutToursInputSchema) ]),
}).strict();

export default HotelCreateOrConnectWithoutToursInputSchema;
