import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { DishWhereInputSchema } from '../inputTypeSchemas/DishWhereInputSchema'

export const DishDeleteManyArgsSchema: z.ZodType<Prisma.DishDeleteManyArgs> = z.object({
  where: DishWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default DishDeleteManyArgsSchema;
