import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourScalarWhereInputSchema } from './TourScalarWhereInputSchema';
import { TourUpdateManyMutationInputSchema } from './TourUpdateManyMutationInputSchema';
import { TourUncheckedUpdateManyWithoutHotelInputSchema } from './TourUncheckedUpdateManyWithoutHotelInputSchema';

export const TourUpdateManyWithWhereWithoutHotelInputSchema: z.ZodType<Prisma.TourUpdateManyWithWhereWithoutHotelInput> = z.object({
  where: z.lazy(() => TourScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TourUpdateManyMutationInputSchema),z.lazy(() => TourUncheckedUpdateManyWithoutHotelInputSchema) ]),
}).strict();

export default TourUpdateManyWithWhereWithoutHotelInputSchema;
