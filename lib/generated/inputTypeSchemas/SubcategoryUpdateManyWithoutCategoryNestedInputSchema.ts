import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SubcategoryCreateWithoutCategoryInputSchema } from './SubcategoryCreateWithoutCategoryInputSchema';
import { SubcategoryUncheckedCreateWithoutCategoryInputSchema } from './SubcategoryUncheckedCreateWithoutCategoryInputSchema';
import { SubcategoryCreateOrConnectWithoutCategoryInputSchema } from './SubcategoryCreateOrConnectWithoutCategoryInputSchema';
import { SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema } from './SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { SubcategoryCreateManyCategoryInputEnvelopeSchema } from './SubcategoryCreateManyCategoryInputEnvelopeSchema';
import { SubcategoryWhereUniqueInputSchema } from './SubcategoryWhereUniqueInputSchema';
import { SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema } from './SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema } from './SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema';
import { SubcategoryScalarWhereInputSchema } from './SubcategoryScalarWhereInputSchema';

export const SubcategoryUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.SubcategoryUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryCreateWithoutCategoryInputSchema).array(),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => SubcategoryUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubcategoryCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => SubcategoryCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => SubcategoryUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubcategoryCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubcategoryWhereUniqueInputSchema),z.lazy(() => SubcategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubcategoryWhereUniqueInputSchema),z.lazy(() => SubcategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubcategoryWhereUniqueInputSchema),z.lazy(() => SubcategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubcategoryWhereUniqueInputSchema),z.lazy(() => SubcategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => SubcategoryUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => SubcategoryUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubcategoryScalarWhereInputSchema),z.lazy(() => SubcategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubcategoryUpdateManyWithoutCategoryNestedInputSchema;
