import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { HotelCreateWithoutTvchannelsInputSchema } from './HotelCreateWithoutTvchannelsInputSchema';
import { HotelUncheckedCreateWithoutTvchannelsInputSchema } from './HotelUncheckedCreateWithoutTvchannelsInputSchema';
import { HotelCreateOrConnectWithoutTvchannelsInputSchema } from './HotelCreateOrConnectWithoutTvchannelsInputSchema';
import { HotelUpsertWithoutTvchannelsInputSchema } from './HotelUpsertWithoutTvchannelsInputSchema';
import { HotelWhereInputSchema } from './HotelWhereInputSchema';
import { HotelWhereUniqueInputSchema } from './HotelWhereUniqueInputSchema';
import { HotelUpdateToOneWithWhereWithoutTvchannelsInputSchema } from './HotelUpdateToOneWithWhereWithoutTvchannelsInputSchema';
import { HotelUpdateWithoutTvchannelsInputSchema } from './HotelUpdateWithoutTvchannelsInputSchema';
import { HotelUncheckedUpdateWithoutTvchannelsInputSchema } from './HotelUncheckedUpdateWithoutTvchannelsInputSchema';

export const HotelUpdateOneWithoutTvchannelsNestedInputSchema: z.ZodType<Prisma.HotelUpdateOneWithoutTvchannelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HotelCreateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedCreateWithoutTvchannelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HotelCreateOrConnectWithoutTvchannelsInputSchema).optional(),
  upsert: z.lazy(() => HotelUpsertWithoutTvchannelsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HotelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HotelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HotelUpdateToOneWithWhereWithoutTvchannelsInputSchema),z.lazy(() => HotelUpdateWithoutTvchannelsInputSchema),z.lazy(() => HotelUncheckedUpdateWithoutTvchannelsInputSchema) ]).optional(),
}).strict();

export default HotelUpdateOneWithoutTvchannelsNestedInputSchema;
