import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const SubSubcategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.SubSubcategoryCountOutputTypeSelect> = z.object({
  dishes: z.boolean().optional(),
}).strict();

export default SubSubcategoryCountOutputTypeSelectSchema;
