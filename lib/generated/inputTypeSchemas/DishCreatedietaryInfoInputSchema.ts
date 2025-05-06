import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const DishCreatedietaryInfoInputSchema: z.ZodType<Prisma.DishCreatedietaryInfoInput> = z.object({
  set: z.string().array()
}).strict();

export default DishCreatedietaryInfoInputSchema;
