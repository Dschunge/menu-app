import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishCreateManyMenuInputSchema } from './DishCreateManyMenuInputSchema';

export const DishCreateManyMenuInputEnvelopeSchema: z.ZodType<Prisma.DishCreateManyMenuInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DishCreateManyMenuInputSchema),z.lazy(() => DishCreateManyMenuInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DishCreateManyMenuInputEnvelopeSchema;
