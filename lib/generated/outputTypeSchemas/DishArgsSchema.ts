import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishSelectSchema } from '../inputTypeSchemas/DishSelectSchema';
import { DishIncludeSchema } from '../inputTypeSchemas/DishIncludeSchema';

export const DishArgsSchema: z.ZodType<Prisma.DishDefaultArgs> = z.object({
  select: z.lazy(() => DishSelectSchema).optional(),
  include: z.lazy(() => DishIncludeSchema).optional(),
}).strict();

export default DishArgsSchema;
