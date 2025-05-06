import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutMenusInputSchema } from './RestaurantCreateNestedOneWithoutMenusInputSchema';
import { DishCreateNestedManyWithoutMenuInputSchema } from './DishCreateNestedManyWithoutMenuInputSchema';

export const MenuCreateInputSchema: z.ZodType<Prisma.MenuCreateInput> = z.object({
  id: z.string().uuid().optional(),
  position: z.number().int().optional(),
  name: z.string(),
  name_esp: z.string(),
  description: z.string().optional().nullable(),
  description_esp: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutMenusInputSchema),
  dishes: z.lazy(() => DishCreateNestedManyWithoutMenuInputSchema).optional()
}).strict();

export default MenuCreateInputSchema;
