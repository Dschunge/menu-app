import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const DishCreateingredientsInputSchema: z.ZodType<Prisma.DishCreateingredientsInput> = z.object({
  set: z.string().array()
}).strict();

export default DishCreateingredientsInputSchema;
