import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DishMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DishMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  name_esp: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  description_esp: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  subcategoryId: z.lazy(() => SortOrderSchema).optional(),
  subSubcategoryId: z.lazy(() => SortOrderSchema).optional(),
  availableAtDayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  prepTime: z.lazy(() => SortOrderSchema).optional(),
  isPopular: z.lazy(() => SortOrderSchema).optional(),
  isNew: z.lazy(() => SortOrderSchema).optional(),
  menuId: z.lazy(() => SortOrderSchema).optional(),
  course_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DishMaxOrderByAggregateInputSchema;
