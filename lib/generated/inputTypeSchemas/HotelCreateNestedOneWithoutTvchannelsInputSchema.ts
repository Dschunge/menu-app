import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutTvchannelsInputSchema } from './HotelCreateWithoutTvchannelsInputSchema';
import { HotelUncheckedCreateWithoutTvchannelsInputSchema } from './HotelUncheckedCreateWithoutTvchannelsInputSchema';
import { HotelCreateOrConnectWithoutTvchannelsInputSchema } from './HotelCreateOrConnectWithoutTvchannelsInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';

export const HotelCreateNestedOneWithoutTvchannelsInputSchema: z.ZodType<Prisma.HotelCreateNestedOneWithoutTvchannelsInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedCreateWithoutTvchannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutTvchannelsInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional()
}).strict();

export default HotelCreateNestedOneWithoutTvchannelsInputSchema;
