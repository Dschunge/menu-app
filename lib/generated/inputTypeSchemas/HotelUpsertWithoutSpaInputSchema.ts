import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelUpdateWithoutSpaInputSchema } from './HotelUpdateWithoutSpaInputSchema';
import { HotelUncheckedUpdateWithoutSpaInputSchema } from './HotelUncheckedUpdateWithoutSpaInputSchema';
import { HotelCreateWithoutSpaInputSchema } from './HotelCreateWithoutSpaInputSchema';
import { HotelUncheckedCreateWithoutSpaInputSchema } from './HotelUncheckedCreateWithoutSpaInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';

export const HotelUpsertWithoutSpaInputSchema: z.ZodType<Prisma.HotelUpsertWithoutSpaInput> = z.object({
  update: z.union([ z.lazy(() => HotelUpdateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutSpaInputSchema) ]),
  create: z.union([ z.lazy(() => HotelCreateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedCreateWithoutSpaInputSchema) ]),
  where: z.lazy(() => HotelWhereInputSchema).optional()
}).strict();

export default HotelUpsertWithoutSpaInputSchema;
