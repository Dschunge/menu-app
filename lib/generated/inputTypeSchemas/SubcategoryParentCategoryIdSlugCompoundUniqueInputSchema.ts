import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.SubcategoryParentCategoryIdSlugCompoundUniqueInput> = z.object({
  parentCategoryId: z.string(),
  slug: z.string()
}).strict();

export default SubcategoryParentCategoryIdSlugCompoundUniqueInputSchema;
