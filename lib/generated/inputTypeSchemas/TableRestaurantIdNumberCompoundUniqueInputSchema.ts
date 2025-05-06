import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TableRestaurantIdNumberCompoundUniqueInputSchema: z.ZodType<Prisma.TableRestaurantIdNumberCompoundUniqueInput> = z.object({
  restaurantId: z.string(),
  number: z.number()
}).strict();

export default TableRestaurantIdNumberCompoundUniqueInputSchema;
