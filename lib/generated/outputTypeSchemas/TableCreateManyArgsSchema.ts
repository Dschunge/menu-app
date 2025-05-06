import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableCreateManyInputSchema } from '../inputTypeSchemas/TableCreateManyInputSchema'

export const TableCreateManyArgsSchema: z.ZodType<Prisma.TableCreateManyArgs> = z.object({
  data: z.union([ TableCreateManyInputSchema,TableCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TableCreateManyArgsSchema;
