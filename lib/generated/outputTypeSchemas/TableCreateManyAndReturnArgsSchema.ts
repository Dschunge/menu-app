import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableCreateManyInputSchema } from '../inputTypeSchemas/TableCreateManyInputSchema'

export const TableCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TableCreateManyAndReturnArgs> = z.object({
  data: z.union([ TableCreateManyInputSchema,TableCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TableCreateManyAndReturnArgsSchema;
