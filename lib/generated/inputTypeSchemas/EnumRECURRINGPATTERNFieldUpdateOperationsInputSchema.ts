import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RECURRINGPATTERNSchema } from './RECURRINGPATTERNSchema';

export const EnumRECURRINGPATTERNFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRECURRINGPATTERNFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RECURRINGPATTERNSchema).optional()
}).strict();

export default EnumRECURRINGPATTERNFieldUpdateOperationsInputSchema;
