import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const SpaCountOutputTypeSelectSchema: z.ZodType<Prisma.SpaCountOutputTypeSelect> = z.object({
  pricecategory: z.boolean().optional(),
}).strict();

export default SpaCountOutputTypeSelectSchema;
