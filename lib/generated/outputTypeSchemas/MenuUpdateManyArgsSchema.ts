import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuUpdateManyMutationInputSchema } from '../inputTypeSchemas/MenuUpdateManyMutationInputSchema'
import { MenuUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MenuUncheckedUpdateManyInputSchema'
import { MenuWhereInputSchema } from '../inputTypeSchemas/MenuWhereInputSchema'

export const MenuUpdateManyArgsSchema: z.ZodType<Prisma.MenuUpdateManyArgs> = z.object({
  data: z.union([ MenuUpdateManyMutationInputSchema,MenuUncheckedUpdateManyInputSchema ]),
  where: MenuWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MenuUpdateManyArgsSchema;
