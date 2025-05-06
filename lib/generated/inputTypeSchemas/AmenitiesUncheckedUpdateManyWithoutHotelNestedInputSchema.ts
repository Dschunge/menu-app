import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AmenitiesCreateWithoutHotelInputSchema } from './AmenitiesCreateWithoutHotelInputSchema';
import { AmenitiesUncheckedCreateWithoutHotelInputSchema } from './AmenitiesUncheckedCreateWithoutHotelInputSchema';
import { AmenitiesCreateOrConnectWithoutHotelInputSchema } from './AmenitiesCreateOrConnectWithoutHotelInputSchema';
import { AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema } from './AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema';
import { AmenitiesCreateManyHotelInputEnvelopeSchema } from './AmenitiesCreateManyHotelInputEnvelopeSchema';
import { AmenitiesWhereUniqueInputSchema } from './AmenitiesWhereUniqueInputSchema';
import { AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema } from './AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema';
import { AmenitiesUpdateManyWithWhereWithoutHotelInputSchema } from './AmenitiesUpdateManyWithWhereWithoutHotelInputSchema';
import { AmenitiesScalarWhereInputSchema } from './AmenitiesScalarWhereInputSchema';

export const AmenitiesUncheckedUpdateManyWithoutHotelNestedInputSchema: z.ZodType<Prisma.AmenitiesUncheckedUpdateManyWithoutHotelNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmenitiesCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesCreateWithoutHotelInputSchema).array(),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema),z.lazy(() => AmenitiesUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AmenitiesCreateOrConnectWithoutHotelInputSchema),z.lazy(() => AmenitiesCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => AmenitiesUpsertWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AmenitiesCreateManyHotelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AmenitiesWhereUniqueInputSchema),z.lazy(() => AmenitiesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AmenitiesWhereUniqueInputSchema),z.lazy(() => AmenitiesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AmenitiesWhereUniqueInputSchema),z.lazy(() => AmenitiesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AmenitiesWhereUniqueInputSchema),z.lazy(() => AmenitiesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema),z.lazy(() => AmenitiesUpdateWithWhereUniqueWithoutHotelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AmenitiesUpdateManyWithWhereWithoutHotelInputSchema),z.lazy(() => AmenitiesUpdateManyWithWhereWithoutHotelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AmenitiesScalarWhereInputSchema),z.lazy(() => AmenitiesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AmenitiesUncheckedUpdateManyWithoutHotelNestedInputSchema;
