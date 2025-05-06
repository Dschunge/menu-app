import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';
import { DishOrderByRelationAggregateInputSchema } from './DishOrderByRelationAggregateInputSchema';
import { MenuOrderByRelevanceInputSchema } from './MenuOrderByRelevanceInputSchema';

export const MenuOrderByWithRelationInputSchema: z.ZodType<Prisma.MenuOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional(),
  dishes: z.lazy(() => DishOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => MenuOrderByRelevanceInputSchema).optional()
}).strict();

export default MenuOrderByWithRelationInputSchema;
