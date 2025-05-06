import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutAmenitiesInputSchema } from './HotelCreateWithoutAmenitiesInputSchema';
import { HotelUncheckedCreateWithoutAmenitiesInputSchema } from './HotelUncheckedCreateWithoutAmenitiesInputSchema';
import { HotelCreateOrConnectWithoutAmenitiesInputSchema } from './HotelCreateOrConnectWithoutAmenitiesInputSchema';
import { HotelUpsertWithoutAmenitiesInputSchema } from './HotelUpsertWithoutAmenitiesInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelUpdateToOneWithWhereWithoutAmenitiesInputSchema } from './HotelUpdateToOneWithWhereWithoutAmenitiesInputSchema';
import { HotelUpdateWithoutAmenitiesInputSchema } from './HotelUpdateWithoutAmenitiesInputSchema';
import { HotelUncheckedUpdateWithoutAmenitiesInputSchema } from './HotelUncheckedUpdateWithoutAmenitiesInputSchema';

export const HotelUpdateOneWithoutAmenitiesNestedInputSchema: z.ZodType<Prisma.HotelUpdateOneWithoutAmenitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutAmenitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutAmenitiesInputSchema).optional(),
  upsert: z.lazy(() => HotelUpsertWithoutAmenitiesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HotelUpdateToOneWithWhereWithoutAmenitiesInputSchema),z.lazy(() => HotelUpdateWithoutAmenitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutAmenitiesInputSchema) ]).optional(),
}).strict();

export default HotelUpdateOneWithoutAmenitiesNestedInputSchema;
