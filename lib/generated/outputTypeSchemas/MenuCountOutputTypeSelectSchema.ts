import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const MenuCountOutputTypeSelectSchema: z.ZodType<Prisma.MenuCountOutputTypeSelect> = z.object({
  dishes: z.boolean().optional(),
}).strict();

export default MenuCountOutputTypeSelectSchema;
