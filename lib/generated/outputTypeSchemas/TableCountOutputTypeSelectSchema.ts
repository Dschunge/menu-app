import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const TableCountOutputTypeSelectSchema: z.ZodType<Prisma.TableCountOutputTypeSelect> = z.object({
  reservations: z.boolean().optional(),
}).strict();

export default TableCountOutputTypeSelectSchema;
