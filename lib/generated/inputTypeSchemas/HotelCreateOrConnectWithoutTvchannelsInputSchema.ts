import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelCreateWithoutTvchannelsInputSchema } from './HotelCreateWithoutTvchannelsInputSchema';
import { HotelUncheckedCreateWithoutTvchannelsInputSchema } from './HotelUncheckedCreateWithoutTvchannelsInputSchema';

export const HotelCreateOrConnectWithoutTvchannelsInputSchema: z.ZodType<Prisma.HotelCreateOrConnectWithoutTvchannelsInput> = z.object({
  where: z.lazy(() => HotelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HotelCreateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedCreateWithoutTvchannelsInputSchema) ]),
}).strict();

export default HotelCreateOrConnectWithoutTvchannelsInputSchema;
