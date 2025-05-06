import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateManyRestaurantInputSchema } from './DishCreateManyRestaurantInputSchema';

export const DishCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.DishCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DishCreateManyRestaurantInputSchema),z.lazy(() => DishCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DishCreateManyRestaurantInputEnvelopeSchema;
