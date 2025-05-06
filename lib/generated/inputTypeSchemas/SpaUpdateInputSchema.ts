import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { SpaUpdatevideosInputSchema } from './SpaUpdatevideosInputSchema';
import { SpaUpdateimagesInputSchema } from './SpaUpdateimagesInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SpaPriceCategoryUpdateManyWithoutSpaNestedInputSchema } from './SpaPriceCategoryUpdateManyWithoutSpaNestedInputSchema';
import { HotelUpdateOneWithoutSpaNestedInputSchema } from './HotelUpdateOneWithoutSpaNestedInputSchema';

export const SpaUpdateInputSchema: z.ZodType<Prisma.SpaUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description_esp: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  videos: z.union([ z.lazy(() => SpaUpdatevideosInputSchema),z.string().array() ]).optional(),
  images: z.union([ z.lazy(() => SpaUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  pricecategory: z.lazy(() => SpaPriceCategoryUpdateManyWithoutSpaNestedInputSchema).optional(),
  Hotel: z.lazy(() => HotelUpdateOneWithoutSpaNestedInputSchema).optional()
}).strict();

export default SpaUpdateInputSchema;
