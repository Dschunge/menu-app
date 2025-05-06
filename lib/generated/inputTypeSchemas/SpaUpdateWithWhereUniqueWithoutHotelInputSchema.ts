import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaUpdateWithoutHotelInputSchema } from './SpaUpdateWithoutHotelInputSchema';
import { SpaUncheckedUpdateWithoutHotelInputSchema } from './SpaUncheckedUpdateWithoutHotelInputSchema';

export const SpaUpdateWithWhereUniqueWithoutHotelInputSchema: z.ZodType<Prisma.SpaUpdateWithWhereUniqueWithoutHotelInput> = z.object({
  where: z.lazy(() => SpaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpaUpdateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedUpdateWithoutHotelInputSchema) ]),
}).strict();

export default SpaUpdateWithWhereUniqueWithoutHotelInputSchema;
