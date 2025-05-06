import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesScalarWhereInputSchema } from './AmenitiesScalarWhereInputSchema';
import { AmenitiesUpdateManyMutationInputSchema } from './AmenitiesUpdateManyMutationInputSchema';
import { AmenitiesUncheckedUpdateManyWithoutHotelInputSchema } from './AmenitiesUncheckedUpdateManyWithoutHotelInputSchema';

export const AmenitiesUpdateManyWithWhereWithoutHotelInputSchema: z.ZodType<Prisma.AmenitiesUpdateManyWithWhereWithoutHotelInput> = z.object({
  where: z.lazy(() => AmenitiesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AmenitiesUpdateManyMutationInputSchema),z.lazy(() => AmenitiesUncheckedUpdateManyWithoutHotelInputSchema) ]),
}).strict();

export default AmenitiesUpdateManyWithWhereWithoutHotelInputSchema;
