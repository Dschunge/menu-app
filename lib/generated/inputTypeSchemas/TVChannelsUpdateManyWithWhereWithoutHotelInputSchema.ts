import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelsScalarWhereInputSchema } from './TVChannelsScalarWhereInputSchema';
import { TVChannelsUpdateManyMutationInputSchema } from './TVChannelsUpdateManyMutationInputSchema';
import { TVChannelsUncheckedUpdateManyWithoutHotelInputSchema } from './TVChannelsUncheckedUpdateManyWithoutHotelInputSchema';

export const TVChannelsUpdateManyWithWhereWithoutHotelInputSchema: z.ZodType<Prisma.TVChannelsUpdateManyWithWhereWithoutHotelInput> = z.object({
  where: z.lazy(() => TVChannelsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TVChannelsUpdateManyMutationInputSchema),z.lazy(() => TVChannelsUncheckedUpdateManyWithoutHotelInputSchema) ]),
}).strict();

export default TVChannelsUpdateManyWithWhereWithoutHotelInputSchema;
