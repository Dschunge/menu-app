import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuCountOutputTypeSelectSchema } from './MenuCountOutputTypeSelectSchema';

export const MenuCountOutputTypeArgsSchema: z.ZodType<Prisma.MenuCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MenuCountOutputTypeSelectSchema).nullish(),
}).strict();

export default MenuCountOutputTypeSelectSchema;
