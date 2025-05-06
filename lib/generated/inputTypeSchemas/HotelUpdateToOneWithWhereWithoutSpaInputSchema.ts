import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelUpdateWithoutSpaInputSchema } from './HotelUpdateWithoutSpaInputSchema';
import { HotelUncheckedUpdateWithoutSpaInputSchema } from './HotelUncheckedUpdateWithoutSpaInputSchema';

export const HotelUpdateToOneWithWhereWithoutSpaInputSchema: z.ZodType<Prisma.HotelUpdateToOneWithWhereWithoutSpaInput> = z.object({
  where: z.lazy(() => HotelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HotelUpdateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutSpaInputSchema) ]),
}).strict();

export default HotelUpdateToOneWithWhereWithoutSpaInputSchema;
