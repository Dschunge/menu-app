import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishCreateManyInputSchema } from '../inputTypeSchemas/DishCreateManyInputSchema'

export const DishCreateManyArgsSchema: z.ZodType<Prisma.DishCreateManyArgs> = z.object({
  data: z.union([ DishCreateManyInputSchema,DishCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DishCreateManyArgsSchema;
