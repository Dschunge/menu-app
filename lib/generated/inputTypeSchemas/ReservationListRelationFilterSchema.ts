import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { ReservationWhereInputSchema } from './ReservationWhereInputSchema';

export const ReservationListRelationFilterSchema: z.ZodType<Prisma.ReservationListRelationFilter> = z.object({
  every: z.lazy(() => ReservationWhereInputSchema).optional(),
  some: z.lazy(() => ReservationWhereInputSchema).optional(),
  none: z.lazy(() => ReservationWhereInputSchema).optional()
}).strict();

export default ReservationListRelationFilterSchema;
