import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SubSubcategoryCountOutputTypeSelectSchema } from './SubSubcategoryCountOutputTypeSelectSchema';

export const SubSubcategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.SubSubcategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SubSubcategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SubSubcategoryCountOutputTypeSelectSchema;
