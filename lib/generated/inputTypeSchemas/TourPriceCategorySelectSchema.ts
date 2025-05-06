import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TourArgsSchema } from "../outputTypeSchemas/TourArgsSchema"

export const TourPriceCategorySelectSchema: z.ZodType<Prisma.TourPriceCategorySelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  description_esp: z.boolean().optional(),
  tourId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Tour: z.union([z.boolean(),z.lazy(() => TourArgsSchema)]).optional(),
}).strict()

export default TourPriceCategorySelectSchema;
