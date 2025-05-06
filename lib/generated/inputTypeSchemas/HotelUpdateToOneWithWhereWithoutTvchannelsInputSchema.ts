import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelUpdateWithoutTvchannelsInputSchema } from './HotelUpdateWithoutTvchannelsInputSchema';
import { HotelUncheckedUpdateWithoutTvchannelsInputSchema } from './HotelUncheckedUpdateWithoutTvchannelsInputSchema';

export const HotelUpdateToOneWithWhereWithoutTvchannelsInputSchema: z.ZodType<Prisma.HotelUpdateToOneWithWhereWithoutTvchannelsInput> = z.object({
  where: z.lazy(() => HotelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HotelUpdateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutTvchannelsInputSchema) ]),
}).strict();

export default HotelUpdateToOneWithWhereWithoutTvchannelsInputSchema;
