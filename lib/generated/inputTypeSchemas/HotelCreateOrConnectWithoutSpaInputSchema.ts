import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelCreateWithoutSpaInputSchema } from './HotelCreateWithoutSpaInputSchema';
import { HotelUncheckedCreateWithoutSpaInputSchema } from './HotelUncheckedCreateWithoutSpaInputSchema';

export const HotelCreateOrConnectWithoutSpaInputSchema: z.ZodType<Prisma.HotelCreateOrConnectWithoutSpaInput> = z.object({
  where: z.lazy(() => HotelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HotelCreateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedCreateWithoutSpaInputSchema) ]),
}).strict();

export default HotelCreateOrConnectWithoutSpaInputSchema;
