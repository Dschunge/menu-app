import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { DishUncheckedCreateNestedManyWithoutMenuInputSchema } from './DishUncheckedCreateNestedManyWithoutMenuInputSchema';

export const MenuUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.MenuUncheckedCreateWithoutRestaurantInput> = z.object({
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
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutMenuInputSchema).optional()
}).strict();

export default MenuUncheckedCreateWithoutRestaurantInputSchema;
