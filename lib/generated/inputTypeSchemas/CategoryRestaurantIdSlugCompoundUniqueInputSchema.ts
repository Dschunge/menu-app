import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CategoryRestaurantIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.CategoryRestaurantIdSlugCompoundUniqueInput> = z.object({
  restaurantId: z.string(),
  slug: z.string()
}).strict();

export default CategoryRestaurantIdSlugCompoundUniqueInputSchema;
