import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const MenuRestaurantIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.MenuRestaurantIdNameCompoundUniqueInput> = z.object({
  restaurantId: z.string(),
  name: z.string()
}).strict();

export default MenuRestaurantIdNameCompoundUniqueInputSchema;
