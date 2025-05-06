import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TableCreateManyRestaurantInputSchema } from './TableCreateManyRestaurantInputSchema';

export const TableCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.TableCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TableCreateManyRestaurantInputSchema),z.lazy(() => TableCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TableCreateManyRestaurantInputEnvelopeSchema;
