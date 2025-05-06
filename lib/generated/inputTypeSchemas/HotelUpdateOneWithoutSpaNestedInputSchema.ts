import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutSpaInputSchema } from './HotelCreateWithoutSpaInputSchema';
import { HotelUncheckedCreateWithoutSpaInputSchema } from './HotelUncheckedCreateWithoutSpaInputSchema';
import { HotelCreateOrConnectWithoutSpaInputSchema } from './HotelCreateOrConnectWithoutSpaInputSchema';
import { HotelUpsertWithoutSpaInputSchema } from './HotelUpsertWithoutSpaInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelUpdateToOneWithWhereWithoutSpaInputSchema } from './HotelUpdateToOneWithWhereWithoutSpaInputSchema';
import { HotelUpdateWithoutSpaInputSchema } from './HotelUpdateWithoutSpaInputSchema';
import { HotelUncheckedUpdateWithoutSpaInputSchema } from './HotelUncheckedUpdateWithoutSpaInputSchema';

export const HotelUpdateOneWithoutSpaNestedInputSchema: z.ZodType<Prisma.HotelUpdateOneWithoutSpaNestedInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedCreateWithoutSpaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutSpaInputSchema).optional(),
  upsert: z.lazy(() => HotelUpsertWithoutSpaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HotelUpdateToOneWithWhereWithoutSpaInputSchema),z.lazy(() => HotelUpdateWithoutSpaInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutSpaInputSchema) ]).optional(),
}).strict();

export default HotelUpdateOneWithoutSpaNestedInputSchema;
