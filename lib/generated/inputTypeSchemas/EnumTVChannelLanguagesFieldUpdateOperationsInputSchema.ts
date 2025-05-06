import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TVChannelLanguagesSchema } from './TVChannelLanguagesSchema';

export const EnumTVChannelLanguagesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTVChannelLanguagesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TVChannelLanguagesSchema).optional()
}).strict();

export default EnumTVChannelLanguagesFieldUpdateOperationsInputSchema;
