import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { HotelCountOutputTypeSelectSchema } from './HotelCountOutputTypeSelectSchema';

export const HotelCountOutputTypeArgsSchema: z.ZodType<Prisma.HotelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HotelCountOutputTypeSelectSchema).nullish(),
}).strict();

export default HotelCountOutputTypeSelectSchema;
