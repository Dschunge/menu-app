import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const DishCreateallergensInputSchema: z.ZodType<Prisma.DishCreateallergensInput> = z.object({
  set: z.string().array()
}).strict();

export default DishCreateallergensInputSchema;
