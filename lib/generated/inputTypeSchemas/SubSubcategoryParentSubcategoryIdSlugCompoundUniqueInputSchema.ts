import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInput> = z.object({
  parentSubcategoryId: z.string(),
  slug: z.string()
}).strict();

export default SubSubcategoryParentSubcategoryIdSlugCompoundUniqueInputSchema;
