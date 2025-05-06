import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaUpdateWithoutHotelInputSchema } from './SpaUpdateWithoutHotelInputSchema';
import { SpaUncheckedUpdateWithoutHotelInputSchema } from './SpaUncheckedUpdateWithoutHotelInputSchema';
import { SpaCreateWithoutHotelInputSchema } from './SpaCreateWithoutHotelInputSchema';
import { SpaUncheckedCreateWithoutHotelInputSchema } from './SpaUncheckedCreateWithoutHotelInputSchema';

export const SpaUpsertWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.SpaUpsertWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => SpaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpaUpdateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedUpdateWithoutHotelInputSchema) ]),
  create: z.union([ z.lazy(() => SpaCreateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default SpaUpsertWithWhereUniqueWithoutHotelInputSchema;
