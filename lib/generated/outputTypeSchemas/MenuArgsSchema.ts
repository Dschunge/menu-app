import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuSelectSchema } from '../inputTypeSchemas/MenuSelectSchema';
import { MenuIncludeSchema } from '../inputTypeSchemas/MenuIncludeSchema';

export const MenuArgsSchema: z.ZodType<Prisma.MenuDefaultArgs> = z.object({
  select: z.lazy(() => MenuSelectSchema).optional(),
  include: z.lazy(() => MenuIncludeSchema).optional(),
}).strict();

export default MenuArgsSchema;
