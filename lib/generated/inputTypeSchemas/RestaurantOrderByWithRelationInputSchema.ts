import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryOrderByRelationAggregateInputSchema } from './CategoryOrderByRelationAggregateInputSchema';
import { DishOrderByRelationAggregateInputSchema } from './DishOrderByRelationAggregateInputSchema';
import { MenuOrderByRelationAggregateInputSchema } from './MenuOrderByRelationAggregateInputSchema';
import { TableOrderByRelationAggregateInputSchema } from './TableOrderByRelationAggregateInputSchema';
import { ReservationOrderByRelationAggregateInputSchema } from './ReservationOrderByRelationAggregateInputSchema';
import { OpeningHoursOrderByRelationAggregateInputSchema } from './OpeningHoursOrderByRelationAggregateInputSchema';
import { RestaurantOrderByRelevanceInputSchema } from './RestaurantOrderByRelevanceInputSchema';

export const RestaurantOrderByWithRelationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  descriptionshort: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  descriptionshort_esp: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  zipCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  website: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  listorder: z.lazy(() => SortOrderSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  dishes: z.lazy(() => DishOrderByRelationAggregateInputSchema).optional(),
  menus: z.lazy(() => MenuOrderByRelationAggregateInputSchema).optional(),
  tables: z.lazy(() => TableOrderByRelationAggregateInputSchema).optional(),
  reservations: z.lazy(() => ReservationOrderByRelationAggregateInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => RestaurantOrderByRelevanceInputSchema).optional()
}).strict();

export default RestaurantOrderByWithRelationInputSchema;
