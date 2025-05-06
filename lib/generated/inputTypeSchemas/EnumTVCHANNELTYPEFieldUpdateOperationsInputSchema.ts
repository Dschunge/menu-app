import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVCHANNELTYPESchema } from './TVCHANNELTYPESchema';

export const EnumTVCHANNELTYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTVCHANNELTYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TVCHANNELTYPESchema).optional()
}).strict();

export default EnumTVCHANNELTYPEFieldUpdateOperationsInputSchema;
