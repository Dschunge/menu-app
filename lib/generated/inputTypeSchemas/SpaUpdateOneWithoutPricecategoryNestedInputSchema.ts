import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SpaCreateWithoutPricecategoryInputSchema } from './SpaCreateWithoutPricecategoryInputSchema';
import { SpaUncheckedCreateWithoutPricecategoryInputSchema } from './SpaUncheckedCreateWithoutPricecategoryInputSchema';
import { SpaCreateOrConnectWithoutPricecategoryInputSchema } from './SpaCreateOrConnectWithoutPricecategoryInputSchema';
import { SpaUpsertWithoutPricecategoryInputSchema } from './SpaUpsertWithoutPricecategoryInputSchema';
import { SpaWhereInputSchema } from './SpaWhereInputSchema';
import { SpaWhereUniqueInputSchema } from './SpaWhereUniqueInputSchema';
import { SpaUpdateToOneWithWhereWithoutPricecategoryInputSchema } from './SpaUpdateToOneWithWhereWithoutPricecategoryInputSchema';
import { SpaUpdateWithoutPricecategoryInputSchema } from './SpaUpdateWithoutPricecategoryInputSchema';
import { SpaUncheckedUpdateWithoutPricecategoryInputSchema } from './SpaUncheckedUpdateWithoutPricecategoryInputSchema';

export const SpaUpdateOneWithoutPricecategoryNestedInputSchema: z.ZodType<Prisma.SpaUpdateOneWithoutPricecategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SpaCreateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedCreateWithoutPricecategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpaCreateOrConnectWithoutPricecategoryInputSchema).optional(),
  upsert: z.lazy(() => SpaUpsertWithoutPricecategoryInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SpaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SpaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SpaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SpaUpdateToOneWithWhereWithoutPricecategoryInputSchema),z.lazy(() => SpaUpdateWithoutPricecategoryInputSchema),z.lazy(() => SpaUncheckedUpdateWithoutPricecategoryInputSchema) ]).optional(),
}).strict();

export default SpaUpdateOneWithoutPricecategoryNestedInputSchema;
