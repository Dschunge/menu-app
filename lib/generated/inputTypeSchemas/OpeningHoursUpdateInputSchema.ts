import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInputSchema';

export const OpeningHoursUpdateInputSchema: z.ZodType<Prisma.OpeningHoursUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  openTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closeTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isClosed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInputSchema).optional()
}).strict();

export default OpeningHoursUpdateInputSchema;
