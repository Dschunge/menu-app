import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategorySelectSchema } from '../inputTypeSchemas/SubSubcategorySelectSchema';
import { SubSubcategoryIncludeSchema } from '../inputTypeSchemas/SubSubcategoryIncludeSchema';

export const SubSubcategoryArgsSchema: z.ZodType<Prisma.SubSubcategoryDefaultArgs> = z.object({
  select: z.lazy(() => SubSubcategorySelectSchema).optional(),
  include: z.lazy(() => SubSubcategoryIncludeSchema).optional(),
}).strict();

export default SubSubcategoryArgsSchema;
