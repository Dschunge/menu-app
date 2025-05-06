import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { MenuCreateManyRestaurantInputSchema } from './MenuCreateManyRestaurantInputSchema';

export const MenuCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.MenuCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MenuCreateManyRestaurantInputSchema),z.lazy(() => MenuCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MenuCreateManyRestaurantInputEnvelopeSchema;
