import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelUpdateWithoutTvchannelsInputSchema } from './HotelUpdateWithoutTvchannelsInputSchema';
import { HotelUncheckedUpdateWithoutTvchannelsInputSchema } from './HotelUncheckedUpdateWithoutTvchannelsInputSchema';
import { HotelCreateWithoutTvchannelsInputSchema } from './HotelCreateWithoutTvchannelsInputSchema';
import { HotelUncheckedCreateWithoutTvchannelsInputSchema } from './HotelUncheckedCreateWithoutTvchannelsInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelUpsertWithoutTvchannelsInputSchema: z.ZodType<Prisma.HotelUpsertWithoutTvchannelsInput> = z.object({
  update: z.union([ z.lazy(() => HotelUpdateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutTvchannelsInputSchema) ]),
  create: z.union([ z.lazy(() => HotelCreateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedCreateWithoutTvchannelsInputSchema) ]),
  where: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelUpsertWithoutTvchannelsInputSchema;
