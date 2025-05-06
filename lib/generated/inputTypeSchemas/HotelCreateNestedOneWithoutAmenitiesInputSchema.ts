import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutAmenitiesInputSchema } from './HotelCreateWithoutAmenitiesInputSchema';
import { HotelUncheckedCreateWithoutAmenitiesInputSchema } from './HotelUncheckedCreateWithoutAmenitiesInputSchema';
import { HotelCreateOrConnectWithoutAmenitiesInputSchema } from './HotelCreateOrConnectWithoutAmenitiesInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';

export const HotelCreateNestedOneWithoutAmenitiesInputSchema: z.ZodType<Prisma.HotelCreateNestedOneWithoutAmenitiesInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutAmenitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutAmenitiesInputSchema).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional()
}).strict();

export default HotelCreateNestedOneWithoutAmenitiesInputSchema;
