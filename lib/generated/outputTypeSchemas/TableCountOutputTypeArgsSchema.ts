import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TableCountOutputTypeSelectSchema } from './TableCountOutputTypeSelectSchema';

export const TableCountOutputTypeArgsSchema: z.ZodType<Prisma.TableCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TableCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TableCountOutputTypeSelectSchema;
