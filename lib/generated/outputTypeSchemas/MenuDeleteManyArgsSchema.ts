import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuWhereInputSchema } from '../inputTypeSchemas/MenuWhereInputSchema'

export const MenuDeleteManyArgsSchema: z.ZodType<Prisma.MenuDeleteManyArgs> = z.object({
  where: MenuWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MenuDeleteManyArgsSchema;
