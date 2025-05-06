import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaScalarWhereInputSchema } from './SpaScalarWhereInputSchema';
import { SpaUpdateManyMutationInputSchema } from './SpaUpdateManyMutationInputSchema';
import { SpaUncheckedUpdateManyWithoutHotelInputSchema } from './SpaUncheckedUpdateManyWithoutHotelInputSchema';

export const SpaUpdateManyWithWhereWithoutHotelInputSchema: z.ZodType<Prisma.SpaUpdateManyWithWhereWithoutHotelInput> = z.object({
  where: z.lazy(() => SpaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SpaUpdateManyMutationInputSchema),z.lazy(() => SpaUncheckedUpdateManyWithoutHotelInputSchema) ]),
}).strict();

export default SpaUpdateManyWithWhereWithoutHotelInputSchema;
