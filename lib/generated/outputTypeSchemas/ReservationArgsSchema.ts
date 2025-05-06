import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { ReservationSelectSchema } from '../inputTypeSchemas/ReservationSelectSchema';
import { ReservationIncludeSchema } from '../inputTypeSchemas/ReservationIncludeSchema';

export const ReservationArgsSchema: z.ZodType<Prisma.ReservationDefaultArgs> = z.object({
  select: z.lazy(() => ReservationSelectSchema).optional(),
  include: z.lazy(() => ReservationIncludeSchema).optional(),
}).strict();

export default ReservationArgsSchema;
