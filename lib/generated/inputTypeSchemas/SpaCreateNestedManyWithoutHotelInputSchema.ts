import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateWithoutHotelInputSchema } from './SpaCreateWithoutHotelInputSchema';
import { SpaUncheckedCreateWithoutHotelInputSchema } from './SpaUncheckedCreateWithoutHotelInputSchema';
import { SpaCreateOrConnectWithoutHotelInputSchema } from './SpaCreateOrConnectWithoutHotelInputSchema';
import { SpaCreateManyHotelInputEnvelopeSchema } from './SpaCreateManyHotelInputEnvelopeSchema';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';

export const SpaCreateNestedManyWithoutHotelInputSchema: z.ZodType<Prisma.SpaCreateNestedManyWithoutHotelInput> = z.object({
  create: z.union([ z.lazy(() => SpaCreateWithoutHotelInputSchema),z.lazy(() => SpaCreateWithoutHotelInputSchema).array(),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema),z.lazy(() => SpaUncheckedCreateWithoutHotelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpaCreateOrConnectWithoutHotelInputSchema),z.lazy(() => SpaCreateOrConnectWithoutHotelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpaCreateManyHotelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpaWhereUniqueInputSchema),z.lazy(() => SpaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SpaCreateNestedManyWithoutHotelInputSchema;
