import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { SpaCountOutputTypeSelectSchema } from './SpaCountOutputTypeSelectSchema';

export const SpaCountOutputTypeArgsSchema: z.ZodType<Prisma.SpaCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SpaCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SpaCountOutputTypeSelectSchema;
