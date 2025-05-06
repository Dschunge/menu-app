import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutSpaInputSchema } from './HotelCreateWithoutSpaInputSchema';
import { HotelUncheckedCreateWithoutSpaInputSchema } from './HotelUncheckedCreateWithoutSpaInputSchema';
import { HotelCreateOrConnectWithoutSpaInputSchema } from './HotelCreateOrConnectWithoutSpaInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';

export const HotelCreateNestedOneWithoutSpaInputSchema: z.ZodType<Prisma.HotelCreateNestedOneWithoutSpaInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedCreateWithoutSpaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutSpaInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional()
}).strict();

export default HotelCreateNestedOneWithoutSpaInputSchema;
