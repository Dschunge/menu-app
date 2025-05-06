import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AMENITIESTYPESchema } from './AMENITIESTYPESchema';

export const EnumAMENITIESTYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAMENITIESTYPEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AMENITIESTYPESchema).optional()
}).strict();

export default EnumAMENITIESTYPEFieldUpdateOperationsInputSchema;
