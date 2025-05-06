import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutToursInputSchema } from './HotelCreateWithoutToursInputSchema';
import { HotelUncheckedCreateWithoutToursInputSchema } from './HotelUncheckedCreateWithoutToursInputSchema';
import { HotelCreateOrConnectWithoutToursInputSchema } from './HotelCreateOrConnectWithoutToursInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';

export const HotelCreateNestedOneWithoutToursInputSchema: z.ZodType<Prisma.HotelCreateNestedOneWithoutToursInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutToursInputSchema),z.lazy(() => HotelUncheckedCreateWithoutToursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutToursInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional()
}).strict();

export default HotelCreateNestedOneWithoutToursInputSchema;
