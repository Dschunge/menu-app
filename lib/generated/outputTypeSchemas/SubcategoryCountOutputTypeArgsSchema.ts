import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubcategoryCountOutputTypeSelectSchema } from './SubcategoryCountOutputTypeSelectSchema';

export const SubcategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.SubcategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SubcategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SubcategoryCountOutputTypeSelectSchema;
