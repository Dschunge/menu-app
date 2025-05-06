import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const RestaurantCountOutputTypeSelectSchema: z.ZodType<Prisma.RestaurantCountOutputTypeSelect> = z.object({
  categories: z.boolean().optional(),
  dishes: z.boolean().optional(),
  menus: z.boolean().optional(),
  tables: z.boolean().optional(),
  reservations: z.boolean().optional(),
  openingHours: z.boolean().optional(),
}).strict();

export default RestaurantCountOutputTypeSelectSchema;
