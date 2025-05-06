import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutActivitiesInputSchema } from './HotelCreateWithoutActivitiesInputSchema';
import { HotelUncheckedCreateWithoutActivitiesInputSchema } from './HotelUncheckedCreateWithoutActivitiesInputSchema';
import { HotelCreateOrConnectWithoutActivitiesInputSchema } from './HotelCreateOrConnectWithoutActivitiesInputSchema';
import { HotelUpsertWithoutActivitiesInputSchema } from './HotelUpsertWithoutActivitiesInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelUpdateToOneWithWhereWithoutActivitiesInputSchema } from './HotelUpdateToOneWithWhereWithoutActivitiesInputSchema';
import { HotelUpdateWithoutActivitiesInputSchema } from './HotelUpdateWithoutActivitiesInputSchema';
import { HotelUncheckedUpdateWithoutActivitiesInputSchema } from './HotelUncheckedUpdateWithoutActivitiesInputSchema';

export const HotelUpdateOneWithoutActivitiesNestedInputSchema: z.ZodType<Prisma.HotelUpdateOneWithoutActivitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedCreateWithoutActivitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutActivitiesInputSchema).optional(),
  upsert: z.lazy(() => HotelUpsertWithoutActivitiesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HotelUpdateToOneWithWhereWithoutActivitiesInputSchema),z.lazy(() => HotelUpdateWithoutActivitiesInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutActivitiesInputSchema) ]).optional(),
}).strict();

export default HotelUpdateOneWithoutActivitiesNestedInputSchema;
