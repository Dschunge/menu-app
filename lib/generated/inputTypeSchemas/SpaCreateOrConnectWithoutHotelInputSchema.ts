import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaCreateWithoutHotelInputSchema } from './SpaCreateWithoutHotelInputSchema';
import { SpaUncheckedCreateWithoutHotelInputSchema } from './SpaUncheckedCreateWithoutHotelInputSchema';

export const SpaCreateOrConnectWithoutHotelInputSchema: z.ZodType<Prisma.SpaCreateOrConnectWithoutHotelInput> = z.object({
  where: z.lazy(() => SpaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpaCreateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema) ]),
}).strict();

export default SpaCreateOrConnectWithoutHotelInputSchema;
