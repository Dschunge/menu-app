import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TourCreateWithoutHotelInputSchema } from './TourCreateWithoutHotelInputSchema';
import { TourUncheckedCreateWithoutHotelInputSchema } from './TourUncheckedCreateWithoutHotelInputSchema';
import { TourCreateOrConnectWithoutHotelInputSchema } from './TourCreateOrConnectWithoutHotelInputSchema';
import { TourUpsertWithWhereUniqueWithoutHotelInputSchema } from './TourUpsertWithWhereUniqueWithoutHotelInputSchema';
import { TourCreateManyHotelInputEnvelopeSchema } from './TourCreateManyHotelInputEnvelopeSchema';
import { TourWhereUniqueInputSchema } from './TourWhereUniqueInputSchema';
import { TourUpdateWithWhereUniqueWithoutHotelInputSchema } from './TourUpdateWithWhereUniqueWithoutHotelInputSchema';
import { TourUpdateManyWithWhereWithoutHotelInputSchema } from './TourUpdateManyWithWhereWithoutHotelInputSchema';
import { TourScalarWhereInputSchema } from './TourScalarWhereInputSchema';

export const TourUncheckedUpdateManyWithoutHotelNestedInputSchema: z.ZodType<Prisma.TourUncheckedUpdateManyWithoutHotelNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourCreateWithoutHotelInputSchema),z.lazy(() => TourCreateWithoutHotelInputSchema).array(),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema),z.lazy(() => TourUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourCreateOrConnectWithoutHotelInputSchema),z.lazy(() => TourCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TourUpsertWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => TourUpsertWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourCreateManyHotelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TourWhereUniqueInputSchema),z.lazy(() => TourWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TourWhereUniqueInputSchema),z.lazy(() => TourWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TourWhereUniqueInputSchema),z.lazy(() => TourWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TourWhereUniqueInputSchema),z.lazy(() => TourWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TourUpdateWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => TourUpdateWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TourUpdateManyWithWhereWithoutHotelInputSchema),z.lazy(() => TourUpdateManyWithWhereWithoutHotelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TourScalarWhereInputSchema),z.lazy(() => TourScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TourUncheckedUpdateManyWithoutHotelNestedInputSchema;
