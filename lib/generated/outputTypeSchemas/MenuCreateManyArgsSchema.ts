import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { MenuCreateManyInputSchema } from '../inputTypeSchemas/MenuCreateManyInputSchema'

export const MenuCreateManyArgsSchema: z.ZodType<Prisma.MenuCreateManyArgs> = z.object({
  data: z.union([ MenuCreateManyInputSchema,MenuCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MenuCreateManyArgsSchema;
