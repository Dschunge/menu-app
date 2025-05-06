import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const SubcategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.SubcategoryCountOutputTypeSelect> = z.object({
  dishes: z.boolean().optional(),
  subSubcategories: z.boolean().optional(),
}).strict();

export default SubcategoryCountOutputTypeSelectSchema;
