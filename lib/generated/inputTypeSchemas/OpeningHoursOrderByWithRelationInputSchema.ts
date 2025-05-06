import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { OpeningHoursOrderByRelevanceInputSchema } from './OpeningHoursOrderByRelevanceInputSchema';

export const OpeningHoursOrderByWithRelationInputSchema: z.ZodType<Prisma.OpeningHoursOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  openTime: z.lazy(() => SortOrderSchema).optional(),
  closeTime: z.lazy(() => SortOrderSchema).optional(),
  isClosed: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => OpeningHoursOrderByRelevanceInputSchema).optional()
}).strict();

export default OpeningHoursOrderByWithRelationInputSchema;
