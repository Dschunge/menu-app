import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  dishes: z.boolean().optional(),
  subcategories: z.boolean().optional(),
}).strict();

export default CategoryCountOutputTypeSelectSchema;
