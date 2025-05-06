import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategorySelectSchema } from '../inputTypeSchemas/SubcategorySelectSchema';
import { SubcategoryIncludeSchema } from '../inputTypeSchemas/SubcategoryIncludeSchema';

export const SubcategoryArgsSchema: z.ZodType<Prisma.SubcategoryDefaultArgs> = z.object({
  select: z.lazy(() => SubcategorySelectSchema).optional(),
  include: z.lazy(() => SubcategoryIncludeSchema).optional(),
}).strict();

export default SubcategoryArgsSchema;
